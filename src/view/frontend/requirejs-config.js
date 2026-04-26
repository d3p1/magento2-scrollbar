/**
 * @description RequireJS configuration
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * {@link       https://kingsora.github.io/OverlayScrollbars/#!overview}
 */
var config = {
    paths: {
        overlayScrollbars:
            'D3p1_Scrollbar/js/lib/jquery.overlay.scrollbars.min',
    },
    shim: {
        overlayScrollbars: {
            deps: ['jquery'],
        },
    },
}
