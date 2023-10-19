import './style.scss';
import { truncate, colorNumber } from '../../utils/exos';

function ResultItem({ title, description, image, link, open_issues}) {
  return (
    <article className="resultitem">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{truncate(description)}</p>
      <p>Issues : 
        <span className='resultitem-issues' style={{
          color: colorNumber(open_issues),
        }}>
          {open_issues}
        </span>
      </p>
      <a href={link}>Consulter <span className="sr-only">{title}</span></a>
    </article>
  );
}

export default ResultItem;
