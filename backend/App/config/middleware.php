<?php

use Slim\App;
use Slim\Middleware\ErrorMiddleware;
use Selective\BasePath\BasePathMiddleware;
use App\Middleware\CorsMiddleware;

const JWT_SECRET = "CeciEstUnSecretVraimentLongVirguleTellementLongQuilDevientDifficileADecoderPoint";

return function (App $app) {

    
    $jwt = new Tuupola\Middleware\JwtAuthentication([
        "path" => "/",
        "secret" => JWT_SECRET,
        "ignore" => ["/user/login", "/user/register"],
        "secure" => false,
        "attribute" => "decoded_token_data",
        "algorithm" => ["HS256"],
        "error" => function ($response, $args){
            $data = array('jwtError' => true);
            return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
        }
    ]);

    $app->add($jwt);
    $app->add(new CorsMiddleware());
    // Parse json, form data and xml
    $app->addBodyParsingMiddleware();

    // Add the Slim built-in routing middleware
    $app->addRoutingMiddleware();


    $app->add(BasePathMiddleware::class);

    // Catch exceptions and errors
    $app->add(ErrorMiddleware::class);
};