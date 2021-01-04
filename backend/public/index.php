<?php

require __DIR__ . '/../vendor/autoload.php';

$routes = require __DIR__ . '/../App/routes.php';


$app = new \Slim\App();
$routes($app);
$app->run();
