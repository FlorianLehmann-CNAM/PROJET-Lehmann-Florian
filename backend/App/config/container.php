<?php

use Psr\Container\ContainerInterface;
use Slim\App;
use Slim\Factory\AppFactory;
use Slim\Middleware\ErrorMiddleware;
use Selective\BasePath\BasePathMiddleware;
use App\Controllers\UserController;
use App\Controllers\ProductController;

return [
    'settings' => function(){
        return require __DIR__ . '/settings.php';
    },

    App::class => function(ContainerInterface $container){
        AppFactory::setContainer($container);
        return AppFactory::create();
    },

    ErrorMiddleware::class => function(ContainerInterface $container){
        $app = $container->get(App::class);
        $settings = $container->get('settings')['error'];

        return new ErrorMiddleware(
            $app->getCallableResolver(),
            $app->getResponseFactory(),
            (bool)$settings['display_error_details'],
            (bool)$settings['log_errors'],
            (bool)$settings['log_error_details']
        );
    },

    BasePathMiddleware::class => function (ContainerInterface $container) {
        return new BasePathMiddleware($container->get(App::class));
    },

    UserController::class => function(ContainerInterface $container){
        return new UserController($container);
    },

    ProductController::class => function(ContainerInterface $container){
        return new ProductController($container);
    },

    'entityManager' => function(){
        require_once __DIR__ . '/../Doctrine/bootstrap.php';
        return $entityManager;
    }
    
];