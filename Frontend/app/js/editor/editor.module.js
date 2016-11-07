const angular = require('angular');
const editorConfig = require('./editor.config');
const editorController = require('./editor.controller');
const animationService = require('./services/animation.service');
const editorService = require('./services/editor.service');
const editorPreviewOverlay = require('./overlay/editor-preview-overlay.directive');
const editorNavbar = require('./navbar/editor-navbar.directive');
const animationPreview = require('./preview/animation-preview.directive');
const effectEditor = require('./editor/effect-editor.directive');
const editorTimeline = require('./timeline/editor-timeline/editor-timeline.directive');
const effectChannel = require('./timeline/effect-channel/effect-channel.directive');
const animationEffect = require('./timeline/animation-effect/animation-effect.directive');

const editorModule = angular.module('app.editor', [
    'app.directives',
    'app.filters',
    'app.navigation',
    'app.rest'
]);

editorModule
    .config(editorConfig)
    .controller(editorController.name, editorController.fn)
    .service(animationService.name, animationService.fn)
    .service(editorService.name, editorService.fn)
    .directive(editorPreviewOverlay.name, editorPreviewOverlay.fn)
    .directive(editorNavbar.name, editorNavbar.fn)
    .directive(animationPreview.name, animationPreview.fn)
    .directive(effectEditor.name, effectEditor.fn)
    .directive(editorTimeline.name, editorTimeline.fn)
    .directive(effectChannel.name, effectChannel.fn)
    .directive(animationEffect.name, animationEffect.fn);

module.exports = editorModule;
