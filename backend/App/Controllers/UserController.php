<?php

namespace App\Controllers;


use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use App\Controllers\JWTController;
use Users;
use Firebase\JWT\JWT;


class UserController{
   
    private $container;
    private $entityManager;


    // constructor receives container instance
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->entityManager = $container->get('entityManager');

    }
 
    public function login(ServerRequestInterface $request, ResponseInterface $response, array $args) : ResponseInterface{

        $login = $request->getQueryParams()['login'];
        $password = $request->getQueryParams()['password'];

        $userRepo = $this->entityManager->getRepository('Users');
        $userExist = $userRepo->findOneBy(array("login" => $login, "password" => $password));

        $response = JWTController::createJwt($response);

        if($userExist){
            $response->getBody()->write(json_encode(array(
                "success" => true,
                "user" => $userExist
            )));
        }
        else{
            $response = $response->withStatus(404);
        }
        
        return $response;
    }

    public function register(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface{
    
        
        $value = json_decode($request->getBody());
        $userRepo = $this->entityManager->getRepository('Users');
        $userExists = $userRepo->findOneBy(array("login" => $value->login, "name" => $value->name));
        
        if(!$userExists){
            $user = new Users;
            $user->setName($value->name);
            $user->setSurname($value->surname);
            $user->setAddress($value->address);
            $user->setPostalCode($value->postalCode);
            $user->setCity($value->city);
            $user->setMobilePhone($value->mobilePhone);
            $user->setMail($value->mail);
            $user->setCountry($value->country);
            $user->setGender($value->gender);
            $user->setLogin($value->login);
            $user->setPassword($value->password);

            $this->entityManager->persist($user);
            $this->entityManager->flush();

            $response->getBody()->write(json_encode($value));
            return $response;
        }
        else{
            return $response
                    ->withStatus(401);

        }

    }

 
}