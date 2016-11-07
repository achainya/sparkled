function editorTimeline(editorService) {
    'ngInject';

    return {
        restrict: 'E',
        templateUrl: 'editor/timeline/editor-timeline/editor-timeline.directive.html',
        link: scope => {
            scope.editorService = editorService;
        }
    }
}

module.exports = {
    name: 'editorTimeline',
    fn: editorTimeline
};
