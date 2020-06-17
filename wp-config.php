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
define( 'DB_NAME', 'BD_wordpress_woocommerce' );

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
define( 'AUTH_KEY',         'e8ZG[JrYYe]^l0^wSrH_2V$u)g}?BS^Oi.-WXt55`l$5k+3#%-l}$gW~S:n/sX9|' );
define( 'SECURE_AUTH_KEY',  'ygDK:.BKODw!!y,W;R8Gk_A[_tRuQjxm;EIAFyN G#+7AI?l_m~(V/)uW(s;?W7`' );
define( 'LOGGED_IN_KEY',    '_3;4/g&p&w WM*I#t._(E_ Cey|<J)13WGg83O$ZbQK8WzRbJ?frPk|uB*qecO`q' );
define( 'NONCE_KEY',        'zv xL}X%yqtVrmhESvbjF!momeyK&W2^`Vqe>b;fj,G=)2&:G6<~Xmn@JVf%B)c[' );
define( 'AUTH_SALT',        '~bs5?2^d4M %sG-E3QIOqt%}Z}sk<i5(Y zf;$R$&`BtW-ZiQ?^ab!@G]@+WG5Bd' );
define( 'SECURE_AUTH_SALT', 'irUJ^~vTpicPv6y$P&jaG:)NOIRc#rDk:n`zs3k>*45,y>A%,.vpLCrn4K?pe0$Y' );
define( 'LOGGED_IN_SALT',   'BRZNxo{/~jkPaSd|>rwmbh<n[B-``J=H-NS6l;Jm.2.tZAg+REiEwUjX]!cmd1Gd' );
define( 'NONCE_SALT',       'NZXdJuE^[M`L)Wb?fW}v C$#:)/m`/b<h{%qZ_8jVB<B6Q*sc@Hl7q0 0/5*q_Vm' );

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
