/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function () {
		console.log("initialize========================================initialize");
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function () {
		console.log("bindEvents========================================bindEvents");
		document.addEventListener('deviceready', this.deviceReady.bind(this), false);
		document.addEventListener('pause', this.pause.bind(this), false);
		document.addEventListener('resume', this.resume.bind(this), false);
		//document.addEventListener('backbutton',this.backButton, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'

	// Bind any cordova events here. Common events are:
	// 'pause', 'resume', etc.
	deviceReady: function () {
		console.log("onDeviceReady========================================onDeviceReady");
		native.onCallBack(onCallBack);
		init();
	},

	pause: function () {
		console.log("onPause========================================onPause");
		onPause();
	},

	resume: function () {
		console.log("onResume========================================onResume");
		onResume();
	}

	// backbutton:function(){
	//     console.log("backbutton========================================backbutton");
	//     backButton();
	// }
};

function onCallBack(result) {
	console.log("onCallBack========================================" + result);
	var ret = JSON.parse(result);

	var name = ret[0];
	if (name === "onFocus") {
		onReFocus();
	} else if (name === "finish") {
		finish()
	} else if (name === "onDestroy") {
		onDestroy()
	}
}

try {
	app.initialize();
} catch (e) {
	console.log(e);
}
