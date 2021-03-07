import React, { useState, useEffect } from "react";
// import teamList from "./register_team";

const RegisterCompetition = () => {
  const [competitionList, setCompetitionList] = useState([]);
  const [competition, setCompetition] = useState({
    name: '',
    prize: '',
    winningScore: 10,
    rules: ''
  });

  const teamList = []

  const inputForm = (event) => {
    competition[event.target.name] = event.target.value;
    setCompetition(competition);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const new_comp = (arr => [...arr, competition]);
    setCompetitionList(new_comp);
  }

  useEffect(() => {
    console.log(competitionList);
  }, [competitionList]);

  return (
    <>
      <div>
        <h3>Formulário de cadastro de time</h3>
        <form onSubmit={handleFormSubmit}>

          <label>Nome da nova Tabela: </label>
          <input type="text" name="name" onChange={inputForm} />
          <br />

          <label>Premiação: </label>
          <input type="text" name="prize" onChange={inputForm} />
          <br />

          <label>Pontuação vencedora: </label>
          <input type="text" name="winningScore" onChange={inputForm} />
          <br />

          <label>Regras: </label>
          <textarea type="text" name="rules" onChange={inputForm} />
          <br />

          <input type="submit" value="Cadastrar" />

        </form>
      </div>
      <div>
        {competitionList.map(({ name, prize, winningScore, rules }, key) => (
          <table key={key}>
            <tbody>
              <tr>
                <td>Nome:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Premiação:</td>
                <td>{prize}</td>
              </tr>
              <tr>
                <td>Pontuação Vencedora:</td>
                <td>{winningScore}</td>
              </tr>
              <tr>
                <td>Premiação:</td>
                <td>{rules}</td>
              </tr>
              <tr>
                <td>Adicionar times:</td>
                <select key={key}>
                {teamList.map(({name}, key) => (
                  <option value={name}>{name}</option>
                ))}
                </select>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default RegisterCompetition;