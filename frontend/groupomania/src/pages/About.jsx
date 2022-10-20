import React from "react";
import { Stack, Container, Typography } from "@mui/material";



function About() {
   
  return (
    <>
    <Stack spacing={6} direction="row">
    <Container xs={2}>

    </Container>
    <Container xs={2}>
    <Typography>Il y a 6 mois, la direction a détecté un ralentissement de la productivité.
Elle l’a attribué assez rapidement à une baisse de la motivation et de
l’implication des employés. La direction a réagi et a mis en place un comité
de pilotage sur le bien-être au travail il y a deux mois.
Ce comité de pilotage est composé d'une dizaine de personnes,
regroupant des représentants de la direction et des salariés. Son rôle est
de diffuser des questionnaires aux salariés et de restituer les résultats au
département des ressources humaines, pour envisager des actions
pouvant améliorer le bien-être des salariés.
L’enquête la plus récente a confirmé qu’une partie du personnel n’était
pas satisfaite de l’ambiance de travail.</Typography>
    </Container>
    <Container xs={2} sx={{ display: 'flex', justifyContent: 'center', m: 10 }}>
        <Typography>Il y a 6 mois, la direction a détecté un ralentissement de la productivité.
Elle l’a attribué assez rapidement à une baisse de la motivation et de
l’implication des employés. La direction a réagi et a mis en place un comité
de pilotage sur le bien-être au travail il y a deux mois.
Ce comité de pilotage est composé d'une dizaine de personnes,
regroupant des représentants de la direction et des salariés. Son rôle est
de diffuser des questionnaires aux salariés et de restituer les résultats au
département des ressources humaines, pour envisager des actions
pouvant améliorer le bien-être des salariés.
L’enquête la plus récente a confirmé qu’une partie du personnel n’était
pas satisfaite de l’ambiance de travail.</Typography>
    </Container>
    </Stack>
    </>
  );

}

export default About;
