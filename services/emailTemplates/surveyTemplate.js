const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>Your Opinion Counts.</h3>
          <p>How likely is it that you would refer ${survey.body} to a friend or colleague?</p>
          <div>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/0">0</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/1">1</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/2">2</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/3">3</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/4">4</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/5">5</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/6">6</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/7">7</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/8">8</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/9">9</a>
            <a href="${keys.redirectDomain}/surveys/reason/${survey.id}/10">10</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
