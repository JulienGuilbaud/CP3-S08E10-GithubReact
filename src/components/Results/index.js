import './style.scss';

import ResultItem from '../ResultItem';
import getTitleByResultsNumber from '../../utils/getTitleByResultsNumber';

function Results({ repos }) {
  return (
    <section>
      <h2>{getTitleByResultsNumber(repos)}</h2>
      <div className='results'>
        {repos.map((repo) => (
          <ResultItem
            key={repo.id}
            title={repo.full_name}
            description={repo.description}
            image={repo.owner.avatar_url}
            link={repo.html_url} 
            open_issues={repo.open_issues}
          />
        ))}
      </div>
    </section>
  );
}

export default Results;
