var SIZE_TO_MEDIA = { xs: "(min-width: 0px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)" };
function isMatch(i) { if (!i)
    return !0; var t = SIZE_TO_MEDIA[i]; return !(!t || !matchMedia(t)) && matchMedia(t).matches; }
export { isMatch as a, SIZE_TO_MEDIA as b };
