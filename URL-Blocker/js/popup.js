﻿
(function () {
	// var $ = function (id) { return document.getElementById(id); };
	var Tasks = {
		show: function (obj) {
			obj.className = '';
			return this;
		},
		hide: function (obj) {
			obj.className = 'hide';
			return this;
		},
		//存储dom
		$addItemDiv: $('#addItemDiv')[0],
		$addItemInput: $('#addItemInput')[0],
		$txtTaskTitle: $('#txtTaskTitle')[0],
		$taskItemList: $('#taskItemList')[0],
		//指针
		index: window.localStorage.getItem('Tasks:index'),
		//初始化
		init: function () {
			if (!Tasks.index) {
				window.localStorage.setItem('Tasks:index', Tasks.index = 0);
			}
			/*注册事件*/
			//打开添加文本框
			Tasks.$addItemDiv.addEventListener('click', function () {
				Tasks.show(Tasks.$addItemInput).hide(Tasks.$addItemDiv);
				Tasks.$txtTaskTitle.focus();
			}, true);
			//回车添加
			Tasks.$txtTaskTitle.addEventListener('keyup', function (event) {
				var ev = event || window.event;
				if (ev.keyCode == 13) {
					var task = {
						id: 0,
						task_item: $('txtTaskTitle').value,
						add_time: new Date(),
						is_finished: false
					};
					Tasks.Add(task);
					Tasks.AppendHtml(task);
					Tasks.$txtTaskTitle.value = '';
					Tasks.hide(Tasks.$addItemInput).show(Tasks.$addItemDiv);
				}
				ev.preventDefault();
			}, true);
			//取消
			Tasks.$txtTaskTitle.addEventListener('blur', function () {
				Tasks.$txtTaskTitle.value = '';
				Tasks.hide(Tasks.$addItemInput).show(Tasks.$addItemDiv);
			}, true);
			//初始化数据
			if (window.localStorage.length - 1) {
				var task_list = [];
				var key;
				var i;
				var len;
				for (i = 0, len = window.localStorage.length; i < len; i++) {
					key = window.localStorage.key(i);
					if (/task:\d+/.test(key)) {
						task_list.push(JSON.parse(window.localStorage.getItem(key)));
					}
				}
				for (i = 0, len = task_list.length; i < len; i++) {
					Tasks.AppendHtml(task_list[i]);
				}
			}
		},
		//增加
		Add: function (task) {
			//更新指针
			window.localStorage.setItem('Tasks:index', ++Tasks.index);
			task.id = Tasks.index;
			window.localStorage.setItem("task:" + Tasks.index, JSON.stringify(task));
		},
		//修改
		Edit: function (task) {
			window.localStorage.setItem("task:" + task.id, JSON.stringify(task));
		},
		//删除
		Del: function (task) {
			window.localStorage.removeItem("task:" + task.id);
		},
		AppendHtml: function (task) {
			var oDiv = document.createElement('div');
			oDiv.className = 'taskItem';
			oDiv.setAttribute('id', 'task_' + task.id);
			var addTime = new Date(task.add_time);
			var timeString = addTime.getMonth() + '-' + addTime.getDate() + ' ' + addTime.getHours() + ':' + addTime.getMinutes() + ':' + addTime.getSeconds();
			oDiv.setAttribute('title', timeString);
			var oLabel = document.createElement('label');
			oLabel.className = task.is_finished ? 'off' : 'on';
			var oSpan = document.createElement('span');
			oSpan.className = 'taskTitle';
			var oText = document.createTextNode(task.task_item);
			var lbl;
			oSpan.appendChild(oText);
			oDiv.appendChild(oLabel);
			oDiv.appendChild(oSpan);
			//注册事件
			oDiv.addEventListener('click', function () {
				if (!task.is_finished) {
					task.is_finished = !task.is_finished;
					lbl = this.getElementsByTagName('label')[0];
					lbl.className = (lbl.className == 'on') ? 'off' : 'on';
					Tasks.Edit(task);
				} else {
					if (confirm('是否确定要删除此项？\r\n\r\n点击确定删除，点击取消置为未完成。')) {
						Tasks.Del(task);
						Tasks.RemoveHtml(task);
					} else {
						task.is_finished = !task.is_finished;
						lbl = this.getElementsByTagName('label')[0];
						lbl.className = (lbl.className == 'on') ? 'off' : 'on';
						Tasks.Edit(task);
					}
				}
			}, true);
			Tasks.$taskItemList.appendChild(oDiv);
		},
		RemoveHtml: function (task) {
			var taskListDiv = Tasks.$taskItemList.getElementsByTagName('div');
			for (var i = 0, len = taskListDiv.length; i < len; i++) {
				var id = parseInt(taskListDiv[i].getAttribute('id').substring(5));
				if (id == task.id) {
					Tasks.$taskItemList.removeChild(taskListDiv[i]);
					break;
				}
			}
		}
	};
	Tasks.init();
})();

$("#tb").on("click", test);
$("#toggleBlock").on("click", toggleBlock);
function toggleBlock() {
	LocalStorageManager.toggleBlock();

	setTimeout(function() {
		window.close();
	}, 10);
	// window.close();
}
function getBlockStr() {
	var url = $("#inputUrl").val();
	var ret = "";
	if (!url || url == "") {
		return ret;
	}
	var pattern = $("#inputPattern").val();
	if (pattern == 1) {
		ret = "*://" + url + "*";
	} else if (pattern == 2) {
		ret = "*" + url + "*";
	}
	return ret;
}

function test() {
	var url = getBlockStr();
	if (!url || url == "") {
		return;
	}

	LocalStorageManager.addUrl(url);

	window.close();
}
