import ExtendedFooter from "./ExtendedFooter";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocial from "./FooterSocial";

function Footer() {
    return (<footer className="py-4 bg-red-200 text-customGray ">
        <FooterNewsletter />
        <hr className="w-11/12 mx-auto border-red-300" />
        <FooterSocial />
        <hr className="w-11/12 mx-auto border-red-300" />
        <ExtendedFooter />
    </footer>)
}
export default Footer;