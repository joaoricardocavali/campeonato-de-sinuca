import React, { useState, useEffect } from "react";

const RegisterTeam = () => {
  const [teamList, setTeamList] = useState([])
  const [team, setTeam] = useState({
    name: '',
    p1: '',
    p2: ''
  })

  const inputForm = (event) => {
    team[event.target.name] = event.target.value;
    setTeam(team);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const new_team = (arr => [...arr, team]);
    setTeamList(new_team);
  }

  useEffect(() => {
    console.log(teamList);
  }, [teamList]);

  return (
    <>
      <div>
        <h3>Formulário de cadastro de time</h3>
        <form onSubmit={handleFormSubmit}>

          <label>Nome do Time: </label>
          <input type="text" name="name" onChange={inputForm} />
          <br />

          <label>Jogador 1: </label>
          <input type="text" name="p1" onChange={inputForm} />
          <br />

          <label>Jogador 2: </label>
          <input type="text" name="p2" onChange={inputForm} />
          <br />

          <input type="submit" value="Cadastrar" />

        </form>
      </div>
      <div>
        {/* {teamList.map(({ name, p1, p2 }, key) => (
            <table key={key}>
              <tbody>
                <tr>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>{p1}</td>
                  <td>{p2}</td>
                </tr>
              </tbody>
            </table>
          ))} */}
      </div>
    </>
  );
};

export default RegisterTeam;