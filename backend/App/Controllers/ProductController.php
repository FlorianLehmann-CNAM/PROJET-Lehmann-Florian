<?php


namespace App\Controllers;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use App\Controllers\JWTController;
use Firebase\JWT\JWT;
use Products;


class ProductController{

    
    private $container;
    private $entityManager;

    // constructor receives container instance
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->entityManager = $container->get('entityManager');
    }

    public function getAll(ServerRequestInterface $request, ResponseInterface $response, array $args) : ResponseInterface{

        $productRepo = $this->entityManager->getRepository('Products');
        $products = $productRepo->findAll();

        if($products == null){
            $response->getBody()->write(json_encode(["success" => false]))
                ->withStatus(404);
        }else{
            $response->getBody()->write(json_encode($products));
        }
       
        
        return $response;
            
    }

    public function getById(ServerRequestInterface $request, ResponseInterface $response, array $args) : ResponseInterface{
        
        $id = $args['productId'];
        $productRepo = $this->entityManager->getRepository('Products');
        $product = $productRepo->find($id);

        if($product == null){
            $response->getBody()->write(json_encode(array(
                "error" => "No product of id " . $id
            )));
            $response = $response->withStatus(404);
        }
        else{
            $response->getBody()->write(json_encode($product));
        }

        return $response;
    }
}