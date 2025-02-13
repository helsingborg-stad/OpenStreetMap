<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8066e17ad11558b74a3c144ac6b6a05d
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'AcfOpenStreetMap\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'AcfOpenStreetMap\\' => 
        array (
            0 => __DIR__ . '/../..' . '/source/php',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8066e17ad11558b74a3c144ac6b6a05d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8066e17ad11558b74a3c144ac6b6a05d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8066e17ad11558b74a3c144ac6b6a05d::$classMap;

        }, null, ClassLoader::class);
    }
}
