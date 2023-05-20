import React from "react";
import "./Etudiants.css";

function Etudiants() {
  return (
    <div className="container-etudiants">
      <div>
        <h4>Édition - Directives pour les étudiants</h4>
        <p>
          Tâches à effectuer par l'étudiant à la session d'automne (c'est-à-dire
          maintenant):
        </p>
        <ul>
          <li>
            Au plus tard le mardi 18 septembre à 12h00: Produire un CV que vous
            devez remettre au coordonnateur des stages (Sylvain Labranche).
          </li>
          <li>
            En format "Word" ou en format PDF que vous allez remettre sur Moodle
            pour le cours "2018-2019 : Stages de fin d'études en informatique".
          </li>
          <li>
            Vous devez remettre un seul fichier .ZIP (pas d'autre format
            accepté) nommé NomFamillePrenom.ZIP (pas d'espace, ni d'accent dans
            le nom du fichier)
          </li>
          <li>Contacter les employeurs pour leur proposer vos services</li>
          <li>
            Pour chaque employeur que vous contactez vous devez inscrire ses
            coordonnées sur le formulaire{" "}
            <a href="../documents/contact_employeurs.pdf">
              Fichier en format Word.
            </a>
          </li>
          <li>
            Lorsque vous rencontrez un employeur (entrevue) vous devez remplir
            le formulaire{" "}
            <a href="../documents/rencontre_employeur.pdf">
              &laquo;rencontre&nbsp;employeur&raquo;
            </a>
            .
          </li>
          <li>
            Vous devez rencontrer au moins trois (3) employeurs, à moins bien
            sûr que vous ayez trouvé votre stage avant. Vous devriez avoir au
            moins trois formulaires &laquo;rencontre&raquo;, un par employeur
            rencontré.
          </li>
          <li>
            Au plus tard le vendredi 2 novembre à 12h00: remettre vos
            formulaires &laquo;contact&nbsp;employeurs&raquo; et
            &laquo;rencontre&nbsp;employeur&raquo; remplis:
          </li>
          <li>
            Dans colnet (dans un fichier .ZIP, comme indiqué ci-haut, n'oubliez
            pas d'inclure tous les formulaires &laquo;contact&raquo; et
            &laquo;rencontre&raquo; en format Word)
          </li>
          <li>Ainsi le 2 novembre, vous devriez avoir trouvé votre stage.</li>
        </ul>
      </div>

      <div>
        <p>Sites Web pour vous aider:</p>
        <ul>
          <li>À l'hiver</li>
          <li>
            Pour comprendre le fonctionnement général des projets de fin
            d'études (stages) je vous invite à consulter les différentes
            sections du site Web dans le menu de droite.
          </li>
          <li>
            Lisez ce document concernant{" "}
            <a href="../documents/Code_ethique_presentation_stages.pdf">
              l'éthique et les dates (pour Hiver 2019)
            </a>
          </li>
          <li>
            Plus de détails pour les{" "}
            <a href="rapports_techniques.php">rapports techniques</a>
          </li>
          <li>
            TRÈS IMPORTANT: pour toute communication par courriel avec le
            coordonnateur vous devez inscrire dans le sujet du message:
          </li>
          <ul>
            <li class="retrait petit">SUJET: Stages profil #DA nom - raison</li>
            <li class="retrait petit">profil est soit réseaux, soit prog</li>
            <li class="retrait petit">#DA est votre numéro d'admission</li>
            <li class="retrait petit">nom est votre nom</li>
            <li class="retrait petit">
              par exemple: Stages réseaux 201014109 Joe Larue - contenu CV
            </li>
            <li>
              N'oubliez pas d'inscrire la raison du message (après le tiret).
            </li>
            <li>
              Si ces conditions ne sont pas respectées, j'ignorerai le courriel
              et je ne répondrai pas.
            </li>
          </ul>
        </ul>
      </div>

      <div>
        <p>Déroulement des stages / Horaire de travail</p>
        <p>Les stages ont lieu durant la session d'hiver.</p>
        <p>Ils sont d'une durée de 15 semaines, du x janvier au y mai 2024.</p>
        <p>
          Vous trouverez les détails dans la section "Les profils du programme
          informatique, les dates et les spécificités des stages".
        </p>
        <p>
          Le stagiaire est tenu de respecter l'horaire régulier de l'entreprise
          et des employés occupant des fonctions similaires.
        </p>
        <p>
          Pendant une semaine normale de travail, un stagiaire doit faire entre
          35 et 40 heures.
        </p>
        <p>
          Les étudiants qui ne respectent pas le nombre d'heures établies pour
          une semaine normale doivent reprendre les heures manquantes en
          débutant leur stage plus tôt ou en terminant plus tard (après entente
          avec le coordonnateur des stages et le professeur-superviseur).
        </p>
        <p>
          Un étudiant qui profite de cette règle ne peut terminer son stage
          après la date de présentation des stages.
        </p>
        <p>
          Les étudiants qui font plus de 40 heures par semaine pourront terminer
          leur stage plus tôt (après entente avec le coordonnateur et le
          professeur-superviseur).
        </p>
        <p>
          Pendant les journées pédagogiques et les journées de rattrapage
          (lecture) identifiées sur le calendrier scolaire, le stagiaire est
          tenu d'être présent en milieu de stage.
        </p>
        <p>
          Il est possible de débuter le stage plus tôt (que la date prévue)
          après entente entre l'étudiant, le coordonnateur et l'employeur (un
          stage ne peut débuter plus tôt que le premier lundi de janvier de
          l'année du stage).
        </p>
        <p>Il y aura deux rencontres obligatoires en ligne:</p>
        <ul>
          <li>Vendredi 12h00-13h00 en janvier avant le début des stages.</li>
          <li>
            Vendredi 12h00-13h00 vers le milieu du stage (la date sera
            communiquée plus tard).
          </li>
        </ul>
        <p>
          Les étudiants doivent remettre un rapport hebdomadaire décrivant leurs
          tâches de la semaine au plus tard le lundi suivant avant 11h00 AM (il
          est suggéré de remettre ce rapport le vendredi en fin d'après-midi en
          terminant la semaine). Ce rapport est envoyé par courriel au
          professeur superviseur. Le format du rapport sera discuté avec le
          professeur superviseur de l'étudiant.
        </p>
        <p>
          Le professeur superviseur contactera l'étudiant (selon l'horaire
          préalablement établi avec l'étudiant) à chaque semaine.
        </p>
        <p>
          Le professeur-superviseur rencontre les étudiants à chaque deux
          semaines (à moins d'une entente particulière avec le superviseur de
          l'entreprise).
        </p>
        <p>
          À la fin des stages (habituellement dans la semaine d'évaluation, une
          à deux semaines après les stages), les stagiaires seront appelés à
          présenter leurs projets de fin d'études aux professeurs et aux autres
          stagiaires. Les superviseurs en entreprise sont les bienvenus à ces
          présentations (les personnes intéressées devraient convenir de
          l'horaire avec le professeur-superviseur).
        </p>
      </div>
    </div>
  );
}

export default Etudiants;
