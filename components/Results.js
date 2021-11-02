import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';

const Results = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={results.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;