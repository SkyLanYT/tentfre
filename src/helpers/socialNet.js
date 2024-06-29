const openInNewTab = url => {
  const newWindow = window.open(url, '_blank');
  if (newWindow) newWindow.focus();
};

export const openSocialMedia = (socialMedia, username) => {
  let url = '';
  switch (socialMedia) {
      case 'instagram':
          url = `https://www.instagram.com/${username}`;
      break;
    case 'facebook':
      url = `https://www.facebook.com/${username}`;
      break;
    case 'viber':
      url = `viber://chat?number=${username}`;
      break;
    case 'telegram':
      url = `tg://resolve?domain=${username}`;
      break;
    default:
      console.error('Unsupported social media.');
      return;
  }

  if (
    /Mobi|Android/i.test(navigator.userAgent) &&
    (socialMedia === 'viber' || socialMedia === 'telegram')
  ) {
    // Відкриття додатку на мобільному пристрої
    window.location.href = url;
  } else {
    // Відкриття веб-сайту на комп'ютері або планшеті
    openInNewTab(url);
  }
};
