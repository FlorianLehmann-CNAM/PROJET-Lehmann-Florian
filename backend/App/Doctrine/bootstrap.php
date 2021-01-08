<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once __DIR__ . "/../../vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'ec2-34-246-141-162.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'dgolbooyceblxs',
'password' => 'f752a9691226b985708db43ef3498861b8509509612231159548cd7baa981709',
'dbname' => 'derto5gv1a3b1u',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
