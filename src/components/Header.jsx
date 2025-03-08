import { FaGithub } from 'react-icons/fa';
import { MdLocalPrintshop, MdOutlineSaveAlt, MdOutlineRestartAlt } from 'react-icons/md';

function Header() {
  return (
    <>
      <div className="header">
        <a className="github-link" href="https://github.com/luciavu/cv-application" target="_blank">
          <FaGithub />
        </a>

        <div className="actions">
          <div id="save">
            <MdOutlineSaveAlt />
          </div>
          <div id="print">
            <MdLocalPrintshop />
          </div>
          <div id="clear">
            <MdOutlineRestartAlt />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
