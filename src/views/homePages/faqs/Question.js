import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import Accordion from 'ui-component/extended/Accordion';

// accordion data
const basicData = [
    {
        id: 'basic1',
        defaultExpand: true,
        title: 'Was ist ein Auto-Abo und wie funktioniert es?',
        content:
            'Ein Auto-Abo ist eine flexible Alternative zum Autokauf oder -leasing. Damit können Sie ein Auto für einen bestimmten Zeitraum mieten, ohne sich um Reparaturen, Wartung oder Versicherung kümmern zu müssen. Sie wählen aus der verfügbaren Flotte ein Fahrzeug aus, legen Laufzeit und Kilometeranzahl fest und erhalten das Fahrzeug zum vereinbarten Zeitpunkt. In dieser Zeit sind sämtliche Wartungs- und Versicherungskosten abgedeckt und Sie zahlen lediglich eine monatliche Miete.'
    },
    {
        id: 'basic2',
        title: ' Was kostet das Auto-Abo?',
        content:
            'Die Kosten für das Auto-Abo hängen von verschiedenen Faktoren ab, etwa der Laufzeit, der Kilometerleistung und dem gewählten Fahrzeug. Die genauen Kosten können Sie auf unserer Website berechnen und etwaige Zusatzleistungen transparent prüfen.'
    },
    {
        id: 'basic3',
        title: 'Kann ich während der Laufzeit des Auto-Abo das Fahrzeug wechseln?',
        content:
            'Ja, ein Fahrzeugwechsel während der Laufzeit des Auto-Abo ist möglich. Dabei ist eine Frist von einem Monat einzuhalten und das bestehende Abonnement muss seit mindestens sechs Monaten aktiv sein. '
    },
    {
        id: 'basic4',
        title: 'Welche Vor- oder Nachteile hat das Auto-Abo?',
        content:
            'Das Auto-Abo-Modell erfreut sich immer größerer Beliebtheit, da Kunden gegen eine monatliche Gebühr ein Auto nutzen können, ohne es besitzen zu müssen. Hier sind einige mögliche Vor- und Nachteile eines Auto-Abo:Vorteile des Auto-Abo:Flexibilität: Ein Auto-Abo bietet Flexibilität, da Kunden die Möglichkeit haben, das Fahrzeug bei Bedarf zu wechseln. Dadurch können Nutzer verschiedene Fahrzeugmodelle ausprobieren und an ihre veränderten Anforderungen anpassen.Keine langfristige Bindung: Im Gegensatz zu einem Autokauf oder Leasingvertrag gibt es bei simpcar keine langfristige Bindung. Kunden können das Abo monatlich kündigen, wenn sie das Auto nicht mehr benötigen. Kosten inklusive: In der monatlichen Gebühr bei simpcar sind Versicherung, Wartung, Reparaturen und weitere laufende Kosten enthalten. Kunden müssen sich daher um diese Mehrkosten keine Sorgen machen und haben eine bessere Kontrolle über ihr Budget. Keine Anzahlung: Im Gegensatz zum Kauf oder Leasing eines Autos ist beim simpcar-Auto-Abo keine hohe Anzahlung erforderlich. Kunden müssen lediglich die monatliche Abonnementgebühr und eine Kaution für die Monatsmiete bezahlen Auto.Kilometerlimit: Im Auto-Abo-Vertrag ist eine feste Kilometerzahl pro Monat enthalten. Wenn Kunden diese Grenze überschreiten, müssen sie zusätzliche Gebühren zahlen. Dies kann für Personen mit hohem Kilometerbedarf unpraktisch oder kostspielig sein. Modellverfügbarkeit: Je nach Standort und Nachfrage kann die Verfügbarkeit bestimmter Fahrzeugmodelle begrenzt sein. Kunden haben möglicherweise nicht immer Zugriff auf ihr Traumfahrzeug. Kein Eigentum: Bei einem Auto-Abonnement ist der Kunde nicht Eigentümer des Fahrzeugs. Das bedeutet, dass er nach Ablauf des Abonnements in der Regel keine Möglichkeit mehr hat, das Fahrzeug zu behalten oder zu verkaufen. Wichtig ist, die individuellen Bedürfnisse und Prioritäten zu berücksichtigen, bevor man sich für ein Auto-Abo entscheidet.'
    },
    {
        id: 'basic5',
        title: 'Kann ich während der Laufzeit des Auto-Abo das Fahrzeug wechseln?',
        content:
            'Ja, ein Fahrzeugwechsel während der Laufzeit des Auto-Abo ist möglich. Dabei ist eine Frist von einem Monat einzuhalten und das bestehende Abonnement muss seit mindestens sechs Monaten aktiv sein. '
    },
    {
        id: 'basic6',
        title: 'Welche Vor- oder Nachteile hat das Auto-Abo?',
        content:
            'Das Auto-Abo-Modell erfreut sich immer größerer Beliebtheit, da Kunden gegen eine monatliche Gebühr ein Auto nutzen können, ohne es besitzen zu müssen. Hier sind einige mögliche Vor- und Nachteile eines Auto-Abo:Vorteile des Auto-Abo:Flexibilität: Ein Auto-Abo bietet Flexibilität, da Kunden die Möglichkeit haben, das Fahrzeug bei Bedarf zu wechseln. Dadurch können Nutzer verschiedene Fahrzeugmodelle ausprobieren und an ihre veränderten Anforderungen anpassen.Keine langfristige Bindung: Im Gegensatz zu einem Autokauf oder Leasingvertrag gibt es bei simpcar keine langfristige Bindung. Kunden können das Abo monatlich kündigen, wenn sie das Auto nicht mehr benötigen. Kosten inklusive: In der monatlichen Gebühr bei simpcar sind Versicherung, Wartung, Reparaturen und weitere laufende Kosten enthalten. Kunden müssen sich daher um diese Mehrkosten keine Sorgen machen und haben eine bessere Kontrolle über ihr Budget. Keine Anzahlung: Im Gegensatz zum Kauf oder Leasing eines Autos ist beim simpcar-Auto-Abo keine hohe Anzahlung erforderlich. Kunden müssen lediglich die monatliche Abonnementgebühr und eine Kaution für die Monatsmiete bezahlen Auto.Kilometerlimit: Im Auto-Abo-Vertrag ist eine feste Kilometerzahl pro Monat enthalten. Wenn Kunden diese Grenze überschreiten, müssen sie zusätzliche Gebühren zahlen. Dies kann für Personen mit hohem Kilometerbedarf unpraktisch oder kostspielig sein. Modellverfügbarkeit: Je nach Standort und Nachfrage kann die Verfügbarkeit bestimmter Fahrzeugmodelle begrenzt sein. Kunden haben möglicherweise nicht immer Zugriff auf ihr Traumfahrzeug. Kein Eigentum: Bei einem Auto-Abonnement ist der Kunde nicht Eigentümer des Fahrzeugs. Das bedeutet, dass er nach Ablauf des Abonnements in der Regel keine Möglichkeit mehr hat, das Fahrzeug zu behalten oder zu verkaufen. Wichtig ist, die individuellen Bedürfnisse und Prioritäten zu berücksichtigen, bevor man sich für ein Auto-Abo entscheidet.'
    },
    {
        id: 'basic7',
        title: 'Kann ich während der Laufzeit des Auto-Abo das Fahrzeug wechseln?',
        content:
            'Ja, ein Fahrzeugwechsel während der Laufzeit des Auto-Abo ist möglich. Dabei ist eine Frist von einem Monat einzuhalten und das bestehende Abonnement muss seit mindestens sechs Monaten aktiv sein. '
    },
    {
        id: 'basic8',
        title: 'Was kostet das Auto-Abo?',
        content:
            'Die Kosten für das Auto-Abo hängen von verschiedenen Faktoren ab, etwa der Laufzeit, der Kilometerleistung und dem gewählten Fahrzeug. Die genauen Kosten können Sie auf unserer Website berechnen und etwaige Zusatzleistungen transparent prüfen.'
    },
    {
        id: 'basic9',
        title: 'Was ist ein Auto-Abo und wie funktioniert es?',
        content:'Ein Auto-Abo ist eine flexible Alternative zum Autokauf oder -leasing. Damit können Sie ein Auto für einen bestimmten Zeitraum mieten, ohne sich um Reparaturen, Wartung oder Versicherung kümmern zu müssen. Sie wählen aus der verfügbaren Flotte ein Fahrzeug aus, legen Laufzeit und Kilometeranzahl fest und erhalten das Fahrzeug zum vereinbarten Zeitpunkt. In dieser Zeit sind sämtliche Wartungs- und Versicherungskosten abgedeckt und Sie zahlen lediglich eine monatliche Miete.'
    }
];

// ==============================|| LANDING - HEADER PAGE ||============================== //

const Question = () => {
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '28px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };

    return (
       
            <Container>
                <Grid container sx={{ mb: { xs: 13, sm: 6, md: 6.75 } }}>
                <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={3.5}>
                    <Typography sx={headerSX}>Allgemeine Information</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={8.5}>
                    <SubCard>
                        <Accordion data={basicData} toggle defaultExpandedId="basic1" />
                    </SubCard>
                </Grid>
                </Grid>
                <Grid container spacing={2} pt="70px">
                <Grid item xs={12} sm={12} md={3.5}>
                    <Typography sx={headerSX}>
                    Rund ums Auto</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={8.5}>
                    <SubCard >
                        <Accordion data={basicData} toggle defaultExpandedId="basic1" />
                    </SubCard>
                </Grid></Grid>
                <Grid container spacing={2}  pt="70px">
                <Grid item xs={12} sm={12} md={3.5}>
                    <Typography sx={headerSX}>Rückgabe und Stornierung</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={8.5}>
                    <SubCard >
                        <Accordion data={basicData} toggle defaultExpandedId="basic1" />
                    </SubCard>
                </Grid></Grid>
                </Grid>
            </Container>
      
    );
};

export default Question;
