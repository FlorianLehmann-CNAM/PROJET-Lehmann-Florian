<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;


return function (App $app) {
    

  
    $app->group('/products', function(RouteCollectorProxy $group){
        $group->get('', 'App\Controllers\ProductController:getAll');
        $group->get('/{productId}',  'App\Controllers\ProductController:getById');
    });

    $app->group('/user', function(RouteCollectorProxy $group) {
        $group->get('/login', "App\Controllers\UserController:login");
        $group->post('/register', "App\Controllers\UserController:register");
    });

    $app->map(['OPTIONS'], '/{routes:.+}', function($req, $res) {
        return $res;
    });
};
