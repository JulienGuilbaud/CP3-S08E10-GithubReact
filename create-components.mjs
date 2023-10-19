// le module fs de node parmet de créer des dossiers et des fichiers entre autres
import fs from 'node:fs';

// process.argv -> liste des arguments de la commande executée
// on exclue les 2 premières valeurs qui corresponde à `node` et `create-components.js`
// ainsi c'est la liste des composant à créer
// pour chaque composant demandé on va créer le dossier
process.argv.slice(2).forEach(componentName => {

  // on prépare le chemin vers le dossier à créer
  const componentPath = './src/components/' + componentName;
  // et le nom en minuscule pour le css
  const loweredName = componentName.toLowerCase();

  // contenu du fichier du composant
  const componentContent = `import './style.scss';

function ${componentName}() {
  return (
    <div className="${loweredName}">
      ${componentName}
    </div>
  );
}

export default ${componentName};
`;
  
  // contenu du fichier css
  const styleContent = `.${loweredName} {}`;

  //on crée le dossier du composant, le fichier js et le fichier de style du composant
  fs.mkdirSync(componentPath);
  fs.writeFileSync(componentPath + '/index.js', componentContent);
  fs.writeFileSync(componentPath + '/style.scss', styleContent);

});
