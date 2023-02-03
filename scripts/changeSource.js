"use strict";

const getFeatureVideo = document.getElementById("featureVideo");
const getFeatureSource = document.getElementById("sourceVideo");

const getFeatureVideo2 = document.getElementById("featureVideo2");
const getFeatureSource2 = document.getElementById("sourceVideo2");

const getToDoVideo = document.getElementById("todoVideo");
const getToDoSource = document.getElementById("sourcetodoVideo");

const getSeanVideo = document.getElementById("seanVideo");
const getSeanSource = document.getElementById("sourceseanVideo");

function changeSource() {
    const getfeatureurl = './video/Dark_Featured_Project_Graphic.mp4';
    getFeatureSource .setAttribute("src", getfeatureurl);
    getFeatureVideo .load();
    getFeatureVideo .play();

    const getfeatureurl2 = './video/Dark_Featured_Project_Graphic.mp4';
    getFeatureSource2 .setAttribute("src", getfeatureurl2);
    getFeatureVideo2 .load();
    getFeatureVideo2 .play();
    
    const gettodourl = './video/Dark_ToDo_Today.mp4';
    getToDoSource .setAttribute("src", gettodourl);
    getToDoVideo .load();
    getToDoVideo .play();
    
    const getseanurl = './video/Dark_Sean.mp4';
    getSeanSource .setAttribute("src", getseanurl);
    getSeanVideo .load();
    getSeanVideo .play();
};

let tabItems = Array.prototype.slice.call(document.querySelectorAll('.tabs > ul > li'), 0);
if (tabItems.length > 0) {
  tabItems.forEach(function(el) {
    el.addEventListener('click', () => {
      let target = document.getElementById(el.dataset.target);
      let currentActive = el.parentElement.querySelector('.is-active');
      let currentTarget = document.getElementById(currentActive.dataset.target);

      // Hide current tab and make current tab header not active
      currentTarget.classList.toggle('is-hidden');
      currentActive.classList.toggle('is-active');

      // Highlight new tab and show content
      el.classList.toggle('is-active');
      target.classList.toggle('is-hidden');
    });
  });
}




