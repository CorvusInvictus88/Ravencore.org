#!/bin/bash
cordova platform rm android
cordova platform add android@14.0.1
cordova build android
