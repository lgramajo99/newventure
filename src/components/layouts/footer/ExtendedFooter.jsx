import { NavLink } from "react-router-dom";
import { footerSections } from '../../../assets/json/FooterLink.json'

function ExtendedFooter() {

    return (
        <div id="accordionPanel" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 text-center text-lg">
            {footerSections.map(section => (
                <details open key={section.id} name={section.id} aria-expanded>
                    <summary
                        className="cursor-pointer"
                        aria-controls={`${section.id}-content`}
                        role="button"
                        tabIndex="0"
                    >
                        {section.title}
                    </summary>

                    <ul
                        id={`${section.id}-content`}
                        className="list-none text-base"
                        aria-labelledby={section.id}>

                        {section.links.map(link => (
                            <li key={link.id}>
                                <NavLink
                                    className={"text-gray-800"}
                                    to={link.path}
                                    title={link.title}
                                    aria-label={link.title}
                                    data-link-id={link.id}
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </details>
            ))
            }
        </div >)
}

export default ExtendedFooter;