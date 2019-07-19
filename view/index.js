sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "HTS.IT.FIAE.ITQ",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});