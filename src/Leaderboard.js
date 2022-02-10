import './Leaderboard.css';

const Leaderboard = ({ data }) => {

  return (
    <div className="appp-container">
      <table>
        <thead>
          <tr>
            <th>Hostel Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((hostel) => (
            <tr key={data.name}>
              <td>{hostel.name}</td>
              <td>{hostel.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
