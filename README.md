loadImagesDirective
===================

A simple directive for loading an image with a fallback source in AngularJS. 
The purpose of the directive is to only show images after they have fully loaded. 
It will show a placeholder "loading..." while the image is loading. This can be easily changed in the template.

It can be used as an Element or attribute. 

Parameters
  img-src: string - required
  fallback-src: string - optional

#Usage
  angular.module('myApp', ['fnloadImage'])
  
  <load-image img-src="http://placekitten.com/200/300" fallback-src="http://placekitten.com/100/300"></load-image>
