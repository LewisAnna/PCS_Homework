(async function () {
  'use strict';

  const videoList = $('#videos');
  const videoNameElem = $('#name');
  const videoPictureElem = $('#picture');
  const videoContent = $('#content');
  const videoMedia = $('.has-media');
  const noVideoMedia = $('.no-media');
  const errorElem = $('.error');

  async function loadJson(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    } catch (e) {
      errorElem.text(e.message);
    }
  }

  async function selectVideo(e) {
    const video = await loadJson(`${e.target.value}.json`);

    if (!video) {
      return;
    }

    noVideoMedia.hide();
    videoMedia.show();

    videoNameElem.text(video.name);
    videoPictureElem.attr('src', video.picture);

    videoContent.empty();
    video.content.forEach(content => {
      videoContent.append(`<li>${content}</li>`);

    });
  }

  const video = await loadJson('video.json');

  video?.forEach(video => {
    videoList.append(`<option value="${video.id}">${video.name}</option>`);
  });

  videoList.change(selectVideo);
}());