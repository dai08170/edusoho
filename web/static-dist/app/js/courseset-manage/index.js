webpackJsonp(["app/js/courseset-manage/index"],{"4e68e437f5b716377a9d":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TaskListHeaderFixed=e.updateTaskNum=e.TabChange=e.showSettings=e.unpublishTask=e.publishTask=e.deleteTask=e.publishCourse=e.deleteCourse=e.closeCourse=e.taskSortable=e.sortablelist=void 0;var a=s("b334fd7e4c5a19234db2"),i=n(a),r=s("8f840897d9471c8c1fbd"),o=n(r),u=e.sortablelist=function(t){var e=$(t),s=e.sortable("serialize").get(),n=0,a=0,i=0;e.find(".task-manage-item").each(function(){var t=$(this);t.hasClass("js-task-manage-item")?t.find(".number").length>0&&(n++,t.find(".number").text(n)):t.hasClass("task-manage-unit")?(i++,t.find(".number").text(i)):t.hasClass("task-manage-chapter")&&(a++,i=0,t.find(".number").text(a))}),e.trigger("finished"),$.post(e.data("sortUrl"),{ids:s},function(t){})};e.taskSortable=function(t){$(t).length&&(0,o.default)({element:t,ajax:!1},function(e){u(t)})},e.closeCourse=function(){$("body").on("click",".js-close-course",function(t){var e=$(t.currentTarget);confirm(Translator.trans("course.manage.close_hint"))&&$.post(e.data("check-url"),function(t){t.warn&&!confirm(Translator.trans(t.message))||$.post(e.data("url"),function(t){t.success?((0,i.default)("success",Translator.trans("course.manage.close_success_hint")),location.reload()):(0,i.default)("danger",Translator.trans("course.manage.close_fail_hint")+":"+t.message)})})})},e.deleteCourse=function(){$("body").on("click",".js-delete-course",function(t){confirm(Translator.trans("course.manage.delete_hint"))&&$.post($(t.currentTarget).data("url"),function(t){t.success?((0,i.default)("success",Translator.trans("site.delete_success_hint")),t.redirect?window.location.href=t.redirect:location.reload()):(0,i.default)("danger",Translator.trans("site.delete_fail_hint")+":"+t.message)})})},e.publishCourse=function(){$("body").on("click",".js-publish-course",function(t){confirm(Translator.trans("course.manage.publish_hint"))&&$.post($(t.target).data("url"),function(t){t.success?((0,i.default)("success",Translator.trans("course.manage.task_publish_success_hint")),location.reload()):(0,i.default)("danger",Translator.trans("course.manage.task_publish_fail_hint")+":"+t.message,{delay:5e3})})})},e.deleteTask=function(){$("body").on("click",".delete-item",function(t){if("task"==$(t.currentTarget).data("type")){if(!confirm(Translator.trans("course.manage.task_delete_hint")))return}else if("chapter"==$(t.currentTarget).data("type")&&!confirm(Translator.trans("course.manage.chapter_delete_hint")))return;$.post($(t.currentTarget).data("url"),function(e){e.success?((0,i.default)("success",Translator.trans("site.delete_success_hint")),$(t.target).parents(".task-manage-item").remove(),u("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden"),document.location.reload()):(0,i.default)("danger",Translator.trans("site.delete_fail_hint")+":"+e.message)})})},e.publishTask=function(){$("body").on("click",".publish-item",function(t){$.post($(t.target).data("url"),function(e){if(e.success){var s=$(t.target).closest(".task-manage-item");(0,i.default)("success",Translator.trans("course.manage.task_publish_success_hint")),$(s).find(".publish-item").addClass("hidden"),$(s).find(".delete-item").addClass("hidden"),$(s).find(".unpublish-item").removeClass("hidden"),$(s).find(".publish-status").addClass("hidden")}else(0,i.default)("danger",Translator.trans("course.manage.task_publish_fail_hint")+":"+e.message)})})},e.unpublishTask=function(){$("body").on("click",".unpublish-item",function(t){$.post($(t.target).data("url"),function(e){if(e.success){var s=$(t.target).closest(".task-manage-item");(0,i.default)("success",Translator.trans("course.manage.task_unpublish_success_hint")),$(s).find(".publish-item").removeClass("hidden"),$(s).find(".delete-item").removeClass("hidden"),$(s).find(".unpublish-item").addClass("hidden"),$(s).find(".publish-status").removeClass("hidden")}else(0,i.default)("danger",Translator.trans("course.manage.task_unpublish_fail_hint")+":"+e.message)})})},e.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(t){var e=$(t.currentTarget),s=e.closest(".js-task-manage-item");s.hasClass("active")?s.removeClass("active").find(".js-settings-list").stop().slideUp(500):(s.addClass("active").find(".js-settings-list").stop().slideDown(500),s.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},e.TabChange=function(){$('[data-role="tab"]').click(function(t){var e=$(this);$(e.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},e.updateTaskNum=function(t){},e.TaskListHeaderFixed=function(){var t=$(".js-task-list-header");if(t.length){var e=t.offset().top;$(window).scroll(function(s){$(window).scrollTop()>=e?t.addClass("fixed"):t.removeClass("fixed")})}}},0:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=s("4e68e437f5b716377a9d"),i=s("423d5c93d4f10f876e3b"),r=n(i);(0,a.publishCourse)(),setTimeout(function(){var t=new r.default;t.introType()},500)},"423d5c93d4f10f876e3b":function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}();s("d5e8fa5f17ac5fe79c78");var r=s("fe53252afd7b6c35cb73"),o=n(r),u="COURSE_BASE_INTRO",l="COURSE_TASK_INTRO",c="COURSE_TASK_DETAIL_INTRO",d="COURSE_LIST_INTRO",f="COURSE_LIST_INTRO_COOKIE",h=function(){function t(){var e=this;a(this,t),this.intro=null,this.customClass="es-intro-help multistep",$("body").on("click",".js-skip",function(t){e.intro.exit()})}return i(t,[{key:"introType",value:function(){return this.isTaskCreatePage()?void this.initTaskCreatePageIntro():this.isCourseListPage()?void this.initCourseListPageIntro():void this.initNotTaskCreatePageIntro()}},{key:"isCourseListPage",value:function(){return!!$("#courses-list-table").length}},{key:"isTaskCreatePage",value:function(){return!!$("#step-3").length}},{key:"isInitTaskDetailIntro",value:function(){return $(".js-task-manage-item").attr("into-step-id","step-5"),!!$(".js-settings-list").length}},{key:"introStart",value:function(t){var e=this,s='<i class="es-icon es-icon-close01"></i>';this.intro=introJs(),t.length<2?(s=Translator.trans("intro.confirm_hint"),this.customClass="es-intro-help"):this.customClass="es-intro-help multistep",this.intro.setOptions({steps:t,skipLabel:s,nextLabel:Translator.trans("course_set.manage.next_label"),prevLabel:Translator.trans("course_set.manage.prev_label"),doneLabel:s,showBullets:!1,tooltipPosition:"auto",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:this.customClass}),this.intro.start().onexit(function(){}).onchange(function(){e.intro._currentStep==e.intro._introItems.length-1?$(".introjs-nextbutton").before('<a class="introjs-button  done-button js-skip">'+Translator.trans("intro.confirm_hint")+"<a/>"):$(".js-skip").remove()})}},{key:"initTaskCreatePageIntro",value:function(){$(".js-task-manage-item:first .js-item-content").trigger("click"),store.get(u)||store.get(l)?store.get(l)||(store.set(l,!0),this.introStart(this.initTaskSteps())):(store.set(u,!0),store.set(l,!0),this.introStart(this.initAllSteps()))}},{key:"initTaskDetailIntro",value:function(t){store.get(c)||(store.set(c,!0),this.introStart(this.initTaskDetailSteps(t)))}},{key:"initNotTaskCreatePageIntro",value:function(){store.get(u)||(store.set(u,!0),this.introStart(this.initNotTaskPageSteps()))}},{key:"isSetCourseListCookies",value:function(){store.get(d)||o.default.set(f,!0)}},{key:"initCourseListPageIntro",value:function(){var t=this,e=$("#courses-list-table").find("tbody tr").length;2===e&&!store.get(d)&&o.default.get(f)&&(o.default.remove(f),new Promise(function(t,e){setTimeout(function(){var e=$(".js-sidenav-course-menu");return e.length?void $(".js-sidenav-course-menu").slideUp(function(){t()}):void t()},100)}).then(function(){setTimeout(function(){t.initCourseListIntro(".js-sidenav")},100)}))}},{key:"initCourseListIntro",value:function(t){store.get(d)||(store.set(d,!0),this.introStart(this.initCourseListSteps(t)))}},{key:"initAllSteps",value:function(){var t=[{intro:Translator.trans("course_set.manage.upgrade_hint")},{element:"#step-1",intro:Translator.trans("course_set.manage.upgrade_step1_hint")},{element:"#step-2",intro:Translator.trans("course_set.manage.upgrade_step2_hint")},{element:"#step-3",intro:Translator.trans("course_set.manage.upgrade_step3_hint")}];return this.isInitTaskDetailIntro()&&(t.push({element:'[into-step-id="step-5"]',intro:Translator.trans("course_set.manage.upgrade_step5_hint")}),store.get(c)||store.set(c,!0)),t}},{key:"initNotTaskPageSteps",value:function(){return[{intro:Translator.trans("course_set.manage.upgrade_hint")},{element:"#step-1",intro:Translator.trans("course_set.manage.upgrade_step1_hint")},{element:"#step-2",intro:Translator.trans("course_set.manage.upgrade_step2_hint")}]}},{key:"initTaskSteps",value:function(){var t=[{element:"#step-3",intro:Translator.trans("course_set.manage.upgrade_step3_hint")}];return this.isInitTaskDetailIntro()&&(t.push({element:"#step-5",intro:Translator.trans("course_set.manage.upgrade_step5_hint"),position:"bottom"}),store.get(c)||store.set(c,!0)),t}},{key:"initTaskDetailSteps",value:function(t){return[{element:t,intro:Translator.trans("course_set.manage.activity_link_hint"),position:"bottom"}]}},{key:"initCourseListSteps",value:function(t){return[{element:t,intro:Translator.trans("course_set.manage.hint")}]}},{key:"initResetStep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{element:".js-intro-btn-group",intro:Translator.trans("course_set.manage.all_tutorial",{introBtnClassName:t}),position:"top"}]}}]),t}();e.default=h}});