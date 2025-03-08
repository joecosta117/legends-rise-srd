// import bannerDesktop from "../../assets/banner-desktop.jpg";
import bannerMobile from "../../assets/banner-mobile.jpg";
import bannerDesktopV2 from "../../assets/banner-desktop-enhanced.jpg";
import "./index.scss";

function Banner() {
  return (
    <div className="banner">
      <picture>
        <source media="(min-width: 1024px)" srcSet={bannerDesktopV2} />
        <source media="(min-width: 768px)" srcSet={bannerDesktopV2} />
        <source media="(min-width: 375px)" srcSet={bannerMobile} />
        <img className="banner__image" src={bannerMobile} alt="banner" />
      </picture>
    </div>
  );
}

export default Banner;
