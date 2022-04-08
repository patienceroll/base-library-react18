(function (ReactDomClient, React) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ReactDomClient__default = /*#__PURE__*/_interopDefaultLegacy(ReactDomClient);
    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    function Layout() {
        return React__default["default"].createElement("section", null, "layout");
    }

    ReactDomClient__default["default"].createRoot(document.getElementById('root')).render(Layout());

})(ReactDomClient, React);
