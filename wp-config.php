<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_wordpress_wo' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';%b[pA[J:KjOU6JVL}JXeIvr-y$-!:w`Lxz^E`>S!M&=cM3N_j|v2]3GW+VRRHPg' );
define( 'SECURE_AUTH_KEY',  'dWA^No0721},(wccik7<)x,9dUJ0MChd#JF)y;<>9E$0r3pqAu@J+EB7?B|@E<tR' );
define( 'LOGGED_IN_KEY',    '[C~>y*<#/R&xK4d/m_,LHjWhQ]oM0*:Sk$0LOzY8)1o,AtUZ-<Yp)Kqtr|S>KMs2' );
define( 'NONCE_KEY',        '/~@Ga_uLu1zTwlX`6NV6P8unKPZr+?(%e5T+gPz6qjWi*g_t=fY5Pic$F5fS$vyo' );
define( 'AUTH_SALT',        '7x9wx(fS&p-xeB+jKPkQ?r@}BRvDzL]Bb.I2^&_3$IM2#Yri(Ntl=_SAU~AQh)sp' );
define( 'SECURE_AUTH_SALT', 'Z~6aADu2;`TmeFUU??#K)VAp>tf=Xam+5.{O1^M6;b[+g@Xxr(u{JJ+F9IgDjnUF' );
define( 'LOGGED_IN_SALT',   '<=Ch8_i0&00Ah`Ll]}^0u<!k5;%txR%Ci~AHSey 4W;-gpiwuCYO]jym2WGrrmu$' );
define( 'NONCE_SALT',       ';R$Rr2!ZSWM)LoQGi`C,`BukaypvMAn9ik=j)Q!GPa@7UQKF3Tt4S4z.P%ry(Bt1' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
