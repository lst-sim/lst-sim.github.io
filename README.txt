Version 1.5
- NAFO/Nachforderungsbutton im laufenden Einsatz
- gleicher Meldetext plus NAFO-Grund
- NAFO-Protokoll mit Uhrzeit
- Meldetext kopierbar
- reine Übungssimulation

Version 1.6 – Einsatzkarte:
- Neuer Reiter „Karte“
- OpenStreetMap-Kartenansicht
- Adresssuche
- Marker per Tippen setzen und verschieben
- Reverse-Geocoding: Kartenpunkt -> Adresse
- Koordinaten werden im Einsatz gespeichert
- Einsatzort kann direkt aus der Karte in die Notruf-/Einsatzdaten übernommen werden
- Optionaler Zugriff auf den aktuellen iPad-Standort
- Internetverbindung für Karte und Adresssuche erforderlich

Version 2.0:
- Neutrale 112-Notrufabfrage für Rettungsdienst, Feuerwehr, technische Hilfe und Wasserrettung.
- „Was ist passiert?“ enthält medizinischen Notfall, Reanimation, Feuer/Rauch, Verkehrsunfall,
  technische Hilfe, Person/Tier im Wasser, Boot in Notlage und Sonstiges.
- Automatischer Vorschlag aus der Abfrage.
- Neuer Button „Vorschlag alarmieren“: setzt vorgeschlagene Einheiten im Übungssystem auf Status 3
  und protokolliert die Alarmierungszeit. Keine reale Alarmierung.
- Rettungsdienst-Tag/Nacht-Umschaltung nach Gerätezeit: Tag 07:00–19:00.
- Zusätzliche verifizierte Fahrzeug-/OPTA-Daten aus Friesland (Rettungsdienst, Feuerwehren Varel/Jever/
  Bockhorn, THW Jever) plus Nutzerangaben.
- Polizei bleibt bewusst als abstrakte Übungsressource, da keine operative OPTA erfunden wird.

Version 2.1:
- Button „Zusätzliche Rettungsmittel“ im laufenden Einsatz.
- Zusätzliche verfügbare Mittel können zum Alarmvorschlag ergänzt werden.
- Button „Realistisch“ in der Rettungsmittelübersicht erzeugt einen zufälligen plausiblen Statusmix
  bei Feuerwehr- und Rettungsdienstfahrzeugen.
- Christoph 26 als RTH/Luftrettung, Standort Sanderbusch (Sande), 24/7, ergänzt.

Version 2.2:
- Einsatz abschließen: alle dem Einsatz zugeordneten/alarmierten Einsatzmittel werden auf Status 1 gesetzt.
- Status 1 wechselt automatisch nach zufälliger Rückkehrzeit von 2–10 Minuten auf Status 2.
- Damit spätestens nach 10 Minuten „Frei auf Wache“.

Version 2.3 – geografische OPTA-Zuordnung Friesland:
1 = Jever
2 = Varel
3 = Zetel
4 = Sande
5 = Schortens
6 = Wangerland
7 = Bockhorn

Rettungsdienst- und Feuerwehrmittel werden anhand der zweiten Ziffer des numerischen OPTA-Blocks
dem Bereich zugeordnet und in der Mittelübersicht entsprechend 1–7 sortiert.

Version 2.4:
- Geografische Disposition: verfügbare Fahrzeuge werden anhand Einsatzort/Koordinaten nach Nähe priorisiert.
- OPTA-Gebiete 1–7 bleiben Grundlage der Wach-/Ortszuordnung.
- Notrufabfrage enthält ein manuelles Freitextfeld.
- Bei medizinischen Notfällen/Reanimation wird XABCDE vollständig abgefragt:
  X kritische Blutung, A Atemweg, B Atmung, C Kreislauf, D Neurologie/Bewusstsein, E weitere Befunde/Umgebung.
- JavaScript-Syntax vor Ausgabe mit Node geprüft.

Version 2.5:
- Geografische Fahrzeugauswahl korrigiert:
  Bei manueller Ortsangabe wird der Einsatzort automatisch über OpenStreetMap/Nominatim geocodiert.
  Die Fahrzeugauswahl wird anschließend nach Entfernung zum Einsatzort sortiert.
  Damit wird nicht mehr pauschal 81-83-1 gewählt.
- Vor der endgültigen Alarmierung öffnet sich eine eigene Alarmvorbereitung mit frei editierbarem Freitextfeld.
- XABCDE ist vor Alarmierung verpflichtend bei Reanimation und immer dann, wenn eine Person verletzt,
  erkrankt oder unmittelbar gefährdet ist.
- XABCDE wird auch bei Person im Wasser, Verkehrsunfall und Feuer mit Menschengefährdung abgefragt.
- Alarmierung wird blockiert, solange erforderliches XABCDE nicht vollständig ist.
- Notruf-Freitext, XABCDE und Alarmierungs-Freitext werden im Einsatz gespeichert und in den Meldetext übernommen.
- Bestehende lokale Daten aus v2.4 werden beim ersten Start übernommen.
- JavaScript-Syntax geprüft.

Version 2.6:
- Parallele Notrufe/Einsätze: mehrere Einsätze können gleichzeitig offen und alarmiert sein.
- Beim Start eines weiteren Notrufs bleibt der bisherige Einsatz erhalten.
- Einsätze können in der Leitstellenübersicht einzeln geöffnet und abgeschlossen werden.
- Einsatz-abschließen-Funktion neu aufgebaut und auf konkrete Einsatz-ID bezogen.
- Beim Abschluss werden die zugeordneten/alarmierten Mittel auf Status 1 gesetzt.
- Neuer Reiter IVENA als reine Übungssimulation (keine Verbindung zum realen IVENA, keine Echtzeitdaten).
- IVENA-Ziele können hinzugefügt und mit Grün/Gelb/Rot sowie Übungshinweisen gepflegt werden.
- JavaScript-Syntax geprüft.

Version 2.7:
- Notruf-Freitext ans Ende der Abfrage verschoben.
- Reiter „Rettungsmittel“ neu aufgebaut und repariert.
- Status kann in der Rettungsmittelübersicht direkt geändert werden.
- Button „Realistisch“ und „+ Einheit“ bleiben erhalten.
- Sichtbare Versionsanzeige „Version 2.7“ ergänzt.
- JavaScript-Syntax geprüft.

Version 2.8:
- Freitext aus der Notrufabfrage entfernt; Freitext vor Erstalarmierung bleibt.
- „Weitere Rettungsmittel“ als separater Button am Einsatz und in der Alarmvorbereitung.
- Schnellauswahl: RTW, NEF, NKTW, RTH, HLF, LF, RW, DLK, DLRG-Mittel, Polizei.
- Je Fahrzeugtyp wird geografisch das nächste verfügbare Mittel gewählt.
- Vor Erstalarmierung: Mittel wird zum Vorschlag ergänzt.
- Nach Erstalarmierung: zusätzliches Mittel wird sofort Status 3 und dem Einsatz zugeordnet.
- Separate „Nachforderung“ mit Grund/Lageänderung, Wahl des Mittels, Status 3 und NAFO-Meldetext.
- Sichtbare Versionsanzeige v2.8.
- JavaScript-Syntax geprüft.

Version 3.0 – Fahrzeugterminal:
- Pro Rettungsmittel eigener Fahrzeuglink und QR-Code.
- Fahrzeugansicht zeigt nur dem Fahrzeug zugeordnete Einsätze.
- Fahrzeug kann eigene Statusmeldungen senden.
- Live-Synchronisation optional über Firebase Realtime Database.
- Leitstelle überträgt Erstalarmierungen, Zusatzmittel und Nachforderungen.
- Fahrzeugterminal aktualisiert sich automatisch im 2-Sekunden-Takt.
- Leitstelle übernimmt Statusänderungen aus der Cloud.
- QR-Code direkt im Reiter Rettungsmittel.
- JavaScript-Syntax geprüft.

Version 3.0.1:
- QR-Code-Erzeugung repariert und auf qrcodejs umgestellt.
- Fahrzeugmodus wird nun beim Seitenstart korrekt erkannt.
- Fehler behoben, durch den initVehicleMode versehentlich in der Kartenfunktion saß.
- QR-Seite zeigt weiterhin den Fahrzeuglink, falls die QR-Bibliothek nicht geladen werden kann.
- JavaScript-Syntax geprüft.

Version 3.1:
- Cloud-Sync repariert: Statusänderungen (manuell, „Realistisch“, automatische Rückkehr auf Wache)
  werden jetzt zuverlässig an Firebase gepusht.
- Neu: Die Leitstelle pollt Firebase alle 3 Sekunden und übernimmt Statusmeldungen, die vom
  Fahrzeugterminal aus gesendet wurden (vorher nur einseitig Leitstelle -> Fahrzeug).
- Beim Aktivieren der Live-Verbindung wird der komplette Fuhrpark einmalig hochgeladen; Polling
  startet automatisch neu, falls die Verbindung aus einer vorherigen Sitzung noch aktiv war.
- IVENA-Übungsansicht: Leitstellenbereiche als Filter (Wilhelmshaven, Oldenburg, Wittmund, alle
  vorausgewählt) mit passenden Klinik-Einträgen je Bereich. Weiterhin reine Simulation ohne
  Verbindung zum realen IVENA-System.
- Neue Fahrzeuge: RTW 86-83-01 (Wangerland), OrgL/LNA 82-84-01 (Varel), OrgL/LNA 84-84-01 (Sande).
- AAO-Liste ergänzt um Rettungsdienst- und Feuerwehr-Einträge sowie eine MANV-AAO.
- MANV als eigene 112-Einsatzkategorie: löst XABCDE-Pflicht aus, staffelt RTW-Anzahl nach
  Betroffenenzahl und alarmiert zusätzlich NEF, OrgL/LNA, HLF und ELW.
- JavaScript-Syntax geprüft.

Version 3.2:
- App umbenannt in „DLRG JET Rettungsleitstelle“ (Titel, Header, Speicher-Schlüssel; alte
  lokale Daten aus v3.0/v3.0.1/v3.1 werden beim ersten Start automatisch übernommen).
- Reiter „Übungen“ entfernt.
- Die drei zuletzt hinzugefügten, nicht offiziell verifizierten Fahrzeuge (RTW 86-83-01,
  OrgL/LNA Varel, OrgL/LNA Sande) wieder entfernt – erfundene OPTA-Nummern widersprechen dem
  Projektgrundsatz, keine operative OPTA zu erfinden. Reale Fahrzeuge können weiterhin über
  „+ Einheit“ ergänzt werden.
- Status 7 (Patient aufgenommen) und 8 (bedingt verfügbar) sind für Feuerwehr, THW und DLRG
  nicht mehr auswählbar (weder in der Rettungsmittelübersicht noch am Fahrzeugterminal noch
  im „Realistisch“-Zufallsmodus) – diese Status ergeben nur für den Rettungsdienst Sinn.
- Reiter „Rettungsmittel“ jetzt nach Organisation und Standort gruppiert statt als eine große
  Tabelle.
- MANV als eigene Notfallkategorie entfernt. Stattdessen wird automatisch in die MANV-Eskalation
  gewechselt, sobald bei „Wie viele Personen sind betroffen?“ mehr als 3 angegeben werden.
  Dabei entfällt die Einzel-XABCDE-Abfrage (Sichtung statt Einzelbefund) sowie die Abfrage der
  Rückrufnummer.
- Notfallort-Abfrage zeigt jetzt direkt eine Karte mit Adresssuche; der Ort kann auch per
  Kartenklick/Marker gewählt werden, alternativ weiterhin per Texteingabe.
- Eingehender-Notruf-Bildschirm überarbeitet: Fortschrittsanzeige, MANV-Hinweis, und neue
  Seitenleiste „Nächste verfügbare Mittel“ mit Status und Entfernung zum Einsatzort.
- IVENA-Übungsansicht: Kliniken können jetzt einzelne Fachrichtungen mit „Abgemeldet bis“
  markiert werden. Schalter zwischen manueller Pflege (selbst abmelden) und automatischem
  Zufallsmodus („Neu auswürfeln“). Weiterhin reine Simulation ohne Verbindung zum realen
  IVENA-System.
- JavaScript-Syntax geprüft.

Version 3.3:
- Rückrufnummer-Abfrage komplett entfernt (nicht nur bei MANV übersprungen, sondern generell
  nicht mehr Teil der 112-Abfrage).
- Je eine einsatzbereite OrgL/LNA-Einheit für Varel und Sande ergänzt. Bewusst ohne erfundene
  BOS-/OPTA-Nummer benannt ("OrgL/LNA Varel" / "OrgL/LNA Sande"), verified: Nutzerangabe – bei
  Bedarf könnt ihr die echte Kennung über "+ Einheit"/Bearbeiten ergänzen.
- OrgL/LNA-Einheiten können nicht mehr auf Status 6 (Nicht einsatzbereit), 7 (Patient
  aufgenommen) oder 8 (bedingt verfügbar) gesetzt werden – weder in der Rettungsmittelübersicht
  noch am Fahrzeugterminal noch im „Realistisch“-Zufallsmodus.
- JavaScript-Syntax geprüft.

Version 3.4:
- NEF „Rettung Friesland 84/82-03“ (Sande) entfernt.
- RTW „Rettung Friesland 87/83-01“ (Bockhorn) neu ergänzt, ergänzt den bereits vorhandenen
  Tagesdienst-RTW 87/83-02.
- JavaScript-Syntax geprüft.

Version 3.5:
- AAO-Liste für den Rettungsdienst um XABCDE-basierte Einträge erweitert.
- Neue, spezifischere Meldestichworte, die abhängig vom XABCDE-Ergebnis automatisch zum
  Grund-Einsatzstichwort ergänzt werden (unabhängig vom auslösenden Ereignis, sofern XABCDE
  erhoben wurde – also auch bei Wasser-, VU- oder Feuer-Einsätzen mit Personengefährdung):
  RD_X (kritische Blutung), RD_A (Atemweg gefährdet), RD_B (Atemstillstand / Atmung auffällig),
  RD_C (relevante Blutung / Schockzeichen), RD_D (bewusstlos / Krampfanfall / Bewusstsein
  getrübt).
- Bei kritischen Befunden (RD_X, RD_B Atemstillstand, RD_C relevante Blutung) wird automatisch
  zusätzlich ein RTW und/oder NEF zum Alarmvorschlag ergänzt und ein Hinweis zur
  Schockraum-Voranmeldung ins Meldestichwort aufgenommen.
- Bei MANV (>3 Verletzte) entfällt diese Eskalation weiterhin, da dort keine Einzel-XABCDE
  erhoben wird.
- JavaScript-Syntax geprüft.

Version 3.6:
- Nach abgeschlossener Notruf-Abfrage werden die internen Einsatzstichwort-Codes und die
  rohen Antworten (JSON) nicht mehr direkt angezeigt, sondern standardmäßig ausgeblendet.
- Neuer Button „Interne Codes & Rohdaten anzeigen“ blendet sie bei Bedarf (z. B. zur
  Übungsauswertung) wieder ein.
- JavaScript-Syntax geprüft.

Version 3.7:
- Fahrzeugliste wird beim Laden jetzt automatisch mit den aktuellen Standarddaten abgeglichen:
  neu hinzugekommene Standardfahrzeuge (z. B. RTW 87/83-01) werden bei bereits genutzten
  Installationen automatisch nachgezogen, ohne eigene/manuell angelegte Einträge zu verändern.
- Fahrzeuge mit früher ausgelieferter, aber inzwischen zurückgezogener erfundener OPTA-Nummer
  (86/83-01, 82/84-01, 84/84-01, 84/82-03) werden bei bereits laufenden Installationen
  automatisch entfernt.
- Neuer 🗑️-Button pro Fahrzeug in der Rettungsmittelübersicht, damit auch manuell angelegte
  Einträge (über „+ Einheit“, ohne Organisation – erscheinen unter „Sonstige“) selbst wieder
  gelöscht werden können.
- JavaScript-Syntax geprüft.

Version 3.8:
- Neuer Reiter „IVENA-Zuweisungen“: simulierte Patiententransporte von Rettungsmitteln zu
  Kliniken, analog zur echten IVENA-Zuweisungsliste.
- Zuweisbar sind RTW, NEF (als Begleitung eines RTW) und RTH (wahlweise als eigenes
  Transportmittel oder als Notarzt-Begleitung), sofern das jeweilige Fahrzeug in Status 4
  (Am Einsatzort) steht.
- Beim Zuweisen wechseln die beteiligten Fahrzeuge sofort auf Status 7 (Patient aufgenommen)
  und automatisch nach ca. 20 Minuten auf Status 8 (bedingt verfügbar).
- Zuweisungsliste zeigt je Eintrag: OPTA/Fahrzeug(e), Zielklinik, Fachrichtung (farblich
  hinterlegt grün/rot je nachdem, ob die Fachrichtung laut IVENA-Übungsansicht aktuell
  abgemeldet ist), S+/S- (Schockraum), NA+/NA- (mit/ohne Notarzt), Geschlecht/Alter und
  voraussichtliche Eintreffzeit.
- JavaScript-Syntax geprüft.

Version 3.9:
- Fahrzeugterminal (QR-Code am Fahrzeug) kann jetzt für RTW und RTH selbst eine
  IVENA-Zuweisung erstellen, sobald das Fahrzeug in Status 4 (Am Einsatzort) ist. Formular:
  Zielklinik, Fachrichtung, Schockraum, Geschlecht, Alter, Notarzt an Bord, Eintreffzeit.
- Beim Absenden wird das Fahrzeug sofort auf Status 7 gesetzt (danach automatisch nach ca.
  20 Minuten auf Status 8) und die Zuweisung landet direkt in der Firebase-Datenbank.
- Die Leitstelle holt neue, vom Fahrzeugterminal erstellte Zuweisungen automatisch beim
  nächsten Live-Sync (alle 3 Sekunden) ab und zeigt sie im Reiter „IVENA-Zuweisungen“ an
  (inkl. kurzer Benachrichtigung).
- Leitstellen-seitig erstellte Zuweisungen werden umgekehrt ebenfalls in die Cloud
  geschrieben, sodass beide Seiten synchron bleiben.
- JavaScript-Syntax geprüft.

Version 3.9:
- Fahrzeugterminal (RTW/RTH): IVENA-Zuweisungen sind jetzt bestätigt vollständig nutzbar – inkl.
  Live-Abgleich mit der Leitstelle über die Cloud-Verbindung.
- Fahrzeugterminal zeigt jetzt zusätzlich eine kompakte IVENA-Kurzübersicht (Klinik, Übungsstatus,
  aktuell abgemeldete Fachrichtungen), live aus der Cloud – die Besatzung sieht damit direkt, ob
  die vorgesehene Fachrichtung am Ziel frei ist, bevor sie zuweist.
- IVENA-Daten (Status, Abmeldungen) werden bei jeder Änderung in der Leitstelle automatisch in die
  Firebase-Datenbank gespiegelt, damit Fahrzeugterminals stets aktuelle Werte sehen.
- Neuer Button „📢 Lagemeldung (Status 4) senden“ am Fahrzeugterminal, nur sichtbar für
  OrgL/LNA-Fahrzeuge, während sie in Status 4 (Am Einsatzort) stehen und einem Einsatz
  zugeordnet sind. Die eingegebene Rückmeldung erscheint in der Leitstelle (Leitstellenübersicht
  und Notruf-Detailansicht) als kleiner, rot hinterlegter Hinweistext direkt unter dem
  betroffenen Einsatz.
- JavaScript-Syntax geprüft.

Version 3.10:
- Neuer Button „📟 Nachfordern“ am Fahrzeugterminal – für JEDES Fahrzeug sichtbar, sobald es in
  Status 4 (Am Einsatzort) steht und einem Einsatz zugeordnet ist. Freitext-Grund/Bedarf wird als
  kleiner, rot hinterlegter Hinweis „(Nachforderung)“ unter dem betroffenen Einsatz in der
  Leitstelle angezeigt (Leitstellenübersicht + Notruf-Detailansicht).
- OrgL/LNA-Fahrzeuge können jetzt ebenfalls IVENA anmelden, sobald sie in Status 4 stehen. Da
  OrgL/LNA selbst nie Patienten transportiert, wechselt dabei nicht das OrgL/LNA-Fahrzeug auf
  Status 7, sondern optional ein am Fahrzeugterminal wählbares RTW/RTH (das ebenfalls live aus
  der Cloud als „in Status 4“ erkannt wird). Ohne Auswahl eines Transportmittels wird die
  Anmeldung trotzdem an die Leitstelle übermittelt, nur ohne Status-Änderung.
- JavaScript-Syntax geprüft.

Version 3.11:
- OrgL/LNA-Lagemeldung fragt jetzt zusätzlich die Anzahl der Patienten am Einsatzort ab.
  Anhand der alarmierten RTW-Zahl des Einsatzes wird automatisch eine weitere Meldung erzeugt:
  zu wenige RTW → automatische Nachforderungs-Meldung („📟 … Nachforderung“); zu viele RTW →
  automatische Abbestellungs-Meldung („↩️ … Abbestellung“). Beide erscheinen wie gewohnt als
  rot hinterlegter Hinweis unter dem Einsatz in der Leitstelle.
- NEF-Fahrzeuge können jetzt ebenfalls IVENA anmelden, sobald sie in Status 4 stehen – wahlweise
  für sich selbst (NEF transportiert ausnahmsweise selbst, Status 7) oder für ein begleitendes
  RTW/RTH (live aus der Cloud als „in Status 4“ erkannt).
- JavaScript-Syntax geprüft.

Version 3.12:
- Fahrzeugterminal: Alarmton + Vibration bei neu eingehendem Einsatz. Der Ton ist ein
  synthetischer, zweitoniger Wechselton (angelehnt an klassische Meldeempfänger wie den
  Swissphone X35 – kein Audio-Sample, sondern per Web Audio API erzeugt, da Originaltöne
  urheberrechtlich geschützt sind). Button „🔔 Alarmton testen“ aktiviert/entsperrt Ton und
  Vibration einmalig (Browser-Vorgabe: Audio benötigt eine Nutzerinteraktion).
- Fahrzeugterminal: neuer Button „📍 Standort teilen“ überträgt den echten GPS-Standort des
  Handys laufend (alle ca. 5 Sekunden bei Bewegung) an die Leitstelle.
- Leitstelle: Live-GPS-Positionen erscheinen als Marker auf der Einsatzkarte (Symbol je nach
  Organisation) inkl. Fahrzeugname, Typ, Status und Zeitstempel im Popup.
- Rettungsmittelübersicht zeigt ein kleines 📍-Symbol bei Fahrzeugen mit aktuellem Live-GPS
  (jünger als 2 Minuten).
- Geografische Fahrzeugauswahl (Nächste verfügbare Mittel, automatische Disposition) nutzt jetzt
  bevorzugt die echte Live-Position eines Fahrzeugs, falls vorhanden, statt nur den groben
  Wach-/Ortsstandort.
- JavaScript-Syntax geprüft.

Version 3.86:
- Neuer eigener QR-Code/Link "für den Anrufer": über den neuen Button "📱 QR für Anrufer" am
  Einsatz erzeugt die Leitstelle einen separaten, laienverständlichen Link (getrennt vom
  Fahrzeug- und Nachbar-Fahrzeug-Terminal). Er zeigt dem Anrufer auf einem zweiten Gerät nur
  eine einfache Statusanzeige ("Ihr Notruf wird bearbeitet" / "Hilfe ist unterwegs" /
  "Rettungskräfte sind vor Ort" / "Einsatz abgeschlossen") – keine internen Einsatzdetails,
  Fahrzeugnamen oder Adressen.
- "➕ Weitere Rettungsmittel" ersetzt durch "✏️ Rettungsmittel bearbeiten": am Einsatz können
  Rettungsmittel jetzt nicht nur hinzugefügt, sondern auch wieder aus dem Einsatz entfernt
  werden (vor und nach der Erstalarmierung). Ein entferntes, bereits alarmiertes Mittel wird
  automatisch wieder freigegeben (Status 1); ein per Nachbarschaftshilfe geliehenes Fahrzeug
  geht zurück an den Nachbarlandkreis.
- Fehler behoben: Bei Reanimation wurden durch die XABCDE-Abfrage (insbesondere "B – Keine
  normale Atmung") zusätzlich zum bereits über das Einsatzstichwort alarmierten RTW/NEF ein
  ZWEITES RTW/NEF nachgelegt, sodass am Ende 2× NEF disponiert wurden. Die Reanimation-AAO
  alarmiert jetzt wie vorgesehen genau 1× RTW, 1× NEF sowie – sofern verfügbar – 1× NKTW als
  First Responder.
- Fehler behoben: Die automatische Statusfortschaltung (Status 3 → 4 nach Eintreffen, Status
  7 → 8 nach Transport) berechnete die dafür nötige Fahrzeit über den gerade in der
  Leitstellenoberfläche GEÖFFNETEN Einsatz statt über den dem Fahrzeug tatsächlich
  zugeordneten Einsatz – war kein Einsatz geöffnet oder ein anderer Einsatz aktiv, stimmte die
  berechnete Fahrzeit nicht. Die Fahrzeit wird jetzt korrekt anhand der tatsächlichen
  Fahrzeug-/Zielposition des jeweiligen Einsatzes ermittelt. Die automatische Fortschaltung
  gilt weiterhin nicht für Fahrzeuge, die gerade über ihr eigenes Fahrzeugterminal (Handy/QR)
  manuell gesteuert werden – dort setzt die Besatzung ihren Status weiterhin selbst.
- JavaScript-Syntax geprüft, Playwright-Regressionstest über den vollständigen
  Reanimation-Einsatzablauf (Notruf → AAO → Alarmierung → Rettungsmittel bearbeiten →
  automatische Statusfortschaltung → Anrufer-QR) durchgeführt.

Version 3.87:
- Ganz am Anfang (nach der Szenarioauswahl) wird jetzt einmalig pro Gerät gefragt: "📱 Handy"
  oder "📲 iPad / Tablet". Die Wahl wird lokal gespeichert und steuert das Layout; über den
  neuen Link "📱⇄📲 Ansicht wechseln" oben (neben "🔀 Szenario wechseln") jederzeit änderbar.
- Neue eigene Handy-Ansicht: schlankes, einspaltiges Layout ohne die feste, für iPad optimierte
  Seitenleiste und ohne die am unteren Bildschirmrand fixierte Funkrufgruppen-Leiste – beides
  steht stattdessen ganz normal im Textfluss untereinander, die Bereiche-Leiste wird zu einer
  horizontal scrollbaren Reihe. Dadurch kein Verdecken von Inhalten mehr auf schmalen
  Handybildschirmen.
- Fahrzeug-, Nachbar- und Anrufer-Terminal-Links (per QR auf einem fremden Gerät geöffnet)
  überspringen sowohl die Szenario- als auch die neue Geräteauswahl automatisch, auch wenn auf
  diesem Gerät noch nie eine Szenario-/Geräte-Wahl getroffen wurde (frisches Handy ohne
  lokalen Speicher) – vorher wären sie dort ohne Weiterleitung hängen geblieben.
- JavaScript-Syntax geprüft, Playwright-Test für Handy-Ansicht, iPad-Ansicht, Ansicht-wechseln-
  Link sowie Fahrzeug-Terminal auf frischem Gerät durchgeführt.

Version 3.88:
- Handy-Ansicht: Die (rein dekorative) Funkrufgruppen-Leiste (F/K/R-Kanäle) wird in der
  Handy-Ansicht jetzt gar nicht mehr angezeigt, statt nur nicht mehr fest positioniert zu sein.
  In der iPad-Ansicht bleibt sie unverändert als feste Leiste am unteren Rand erhalten.
- JavaScript-Syntax geprüft, Playwright-Test für beide Ansichten durchgeführt.

Version 3.89:
- Anrufer-QR-Code neu organisiert: Der Button dafür sitzt nicht mehr am einzelnen Einsatz,
  sondern als eigener Bereich "📞 Anrufer" ganz oben in der Rettungsmittelübersicht – über
  "＋ Anrufer" lassen sich beliebig viele, durchnummerierte Anrufer (Anrufer 1, Anrufer 2, …)
  anlegen, unabhängig vom Einsatz.
- Jeder Anrufer-Eintrag wird genau wie ein Fahrzeug in der Rettungsmittelliste dargestellt
  (gleiche Spalten/Optik), inkl. Wähltasten im Stil der manuellen Fahrzeug-Statussteuerung –
  hier aber zur Auswahl, welchem offenen Einsatz dieser Anrufer zugeordnet ist, statt eines
  Status (Anrufer haben bewusst keine Status-Möglichkeit wie Rettungsmittel).
- Der QR-/Link-Button eines Anrufer-Eintrags ist erst aktiv, sobald ein Einsatz zugeordnet
  wurde; über "–" lässt sich die Zuordnung auch wieder aufheben, über 🗑️ der ganze
  Anrufer-Eintrag löschen.
- JavaScript-Syntax geprüft, Playwright-Test für Anlegen/Zuordnen/QR-Anzeige/Entfernen von
  Anrufer-Einträgen durchgeführt.

Version 3.90:
- NEU: Anrufer-Terminal kann jetzt selbst "112" wählen. Das Anrufer-Terminal (QR-Code/Link
  oben in der Rettungsmittelliste, Bereich "📞 Anrufer") zeigt jetzt zuerst eine Wähl-Ansicht
  mit der Nummer 112 und einem grünen Hörer-Button. Ist der Anrufer noch keinem Einsatz
  zugeordnet, öffnet der Link diese Wähl-Ansicht automatisch; ist er bereits zugeordnet, zeigt
  der Link wie bisher die laienverständliche Statusanzeige.
- Drückt der Anrufer den grünen Hörer, wird (bei erlaubtem GPS-Zugriff) sein Standort erfasst
  und an die Leitstelle gemeldet; das Anrufer-Terminal zeigt währenddessen "Notruf wird
  verbunden …".
- In der Leitstelle erscheint dafür ganz oben ein rotes Notruf-Banner mit "✅ Annehmen".
  Annehmen legt direkt einen neuen Notruf an, wählt automatisch "112" als Rufnummer (die
  entsprechende Frage entfällt dadurch) und ordnet den Anrufer-Eintrag automatisch diesem
  neuen Einsatz zu.
- Wurde vom Anrufer ein GPS-Standort übermittelt, fragt die Leitstelle danach einmal kurz
  "📍 Standort übernehmen?". Bei "Ja" wird die Position per Reverse-Geocoding in eine Adresse
  umgewandelt und automatisch als Notfallort übernommen (inkl. Koordinaten für die Kartenan-
  sicht); bei "Nein" bzw. ohne übermittelten Standort läuft die Ortseingabe wie gewohnt manuell
  über Kartensuche/Markersetzen oder Texteingabe weiter.
- Technischer Hinweis: Der Anrufer-Link ist jetzt fest an den Anrufer-Eintrag (nicht mehr an
  einen bestehenden Einsatz) gebunden, damit er schon vor Annahme des Notrufs existieren kann.
  Bereits vor v3.90 erzeugte Anrufer-Links funktionieren dadurch nicht mehr für abgeschlossene
  Einsätze – bitte für neue Übungen einfach einen neuen Anrufer-Eintrag/QR-Code anlegen.
- IVENA-Kliniken überarbeitet und fachlich geprüft: Die hinterlegten Fachabteilungen der
  bestehenden Kliniken wurden anhand öffentlich einsehbarer Klinik-/Abteilungsübersichten
  (u. a. deutsches-krankenhaus-verzeichnis.de, Klinik-Websites, Wikipedia) kontrolliert und
  korrigiert:
   • Nordwest-Krankenhaus Sanderbusch: nicht real vorhandene HNO-Abteilung entfernt.
   • Klinikum Wilhelmshaven: fehlende Pädiatrie ergänzt.
   • Klinikum Oldenburg: fehlende Urologie, Schockraum und HNO ergänzt.
   • Ammerland-Klinik Westerstede: nicht real vorhandene Augenheilkunde entfernt.
   • Evangelisches Krankenhaus Oldenburg: fehlende HNO ergänzt.
   • Pius-Hospital Oldenburg und Kreiskrankenhaus Wittmund: unverändert, Bestand war bereits
     korrekt.
  Bereits laufende Installationen erhalten diesen Abgleich automatisch und einmalig; von der
  Übungsleitung selbst zusätzlich angelegte Kliniken werden dabei nicht angefasst.
- NEU in IVENA: "Helios Klinik Wesermarsch" in Nordenham aufgenommen (Hinweis: der von dir
  genannte Name "Helios Klinikum Nordenham" ist der frühere Name dieses Hauses – die Klinik
  heißt inzwischen offiziell "Helios Klinik Wesermarsch"; das wurde im Eintrag transparent
  vermerkt).
- NEU in IVENA: "St. Johannes-Hospital Varel" aufgenommen – wie gewünscht ausschließlich mit
  einer Fachabteilung Gynäkologie/Geburtshilfe.
- JavaScript-Syntax geprüft; Playwright-Tests für: Anrufer-Terminal-Wählansicht ohne Live-
  Verbindung, Notruf annehmen mit automatisch vorbelegtem "112", "Standort übernehmen?"-
  Dialog inkl. Annehmen/Ablehnen (mit und ohne GPS-Koordinaten), sowie unveränderte
  Zuordnungs-/QR-Funktionen der Anrufer-Liste durchgeführt.

Version 3.91:
- NEU: Rettungsmittel-Ansicht mit Organisations-Filter. Oben in der Rettungsmittelliste gibt
  es jetzt eine Auswahl "📋 Alle" / "🌊 DLRG" / "🚗 DRK" / "🚑 Rettungsdienst" / "🚒 Feuerwehr" /
  "🛠️ THW" / "🚁 Luftrettung" (nur Organisationen, die tatsächlich Fahrzeuge im Bestand haben,
  werden angezeigt). Damit lässt sich die Liste gezielt auf eine einzelne Organisation
  eingrenzen, statt immer alle Organisationen untereinander zu sehen.
- Die Auswahl wird pro Gerät gemerkt (bleibt beim Neuladen erhalten) und wirkt sich nur auf
  die Anzeige aus – Status, Alarmierung und AAO-Logik sind davon unabhängig.
- JavaScript-Syntax geprüft; Playwright-Test für Filtern nach einzelner Organisation und
  Zurücksetzen auf "Alle" durchgeführt.

Version 3.92:
- NEU: Zusätzliche Monitore per QR-Code. Oben in der Leiste gibt es "🖥️ Monitor hinzufügen".
  Der QR-Code bzw. Link wird mit einem weiteren Gerät (iPad, Laptop, Handy, Browser am
  Fernseher) geöffnet – ohne Kabel, nur über die bestehende Live-Verbindung (Firebase).
- Auf dem neuen Monitor wird zuerst die Ansicht gewählt (Leitstelle, Notruf, Karte,
  Rettungsmittel, AAO, IVENA, IVENA-Zuweisungen, Nachbar LKs) plus Layout (iPad/Handy).
  Über "Ansicht wechseln" kommt man jederzeit zurück zu dieser Auswahl; die Seitenleiste
  funktioniert ebenfalls.
- Echtzeit-Abgleich: Der komplette Leitstellenzustand (Einsätze, laufender Notruf, Fahrzeug-
  status, IVENA, Zuweisungen, AAO, Anrufer …) wird über Firebase-Streaming an alle Monitore
  verteilt, Änderungen kommen in ca. 0,2–0,5 s an. Auf jedem Monitor kann auch gearbeitet
  werden; Änderungen laufen in beide Richtungen. Fahrzeuge und Einsätze werden einzeln
  abgeglichen, damit gleichzeitige Änderungen an verschiedenen Fahrzeugen nicht verloren gehen.
  Wird an zwei Geräten gleichzeitig dasselbe Fahrzeug geändert, gilt die zuletzt gesendete
  Änderung.
- Anzeige oben: "● Live" / "● verbinde …" / "● warte auf Hauptplatz" / "● Sync-Fehler".
- Beim Tippen in ein Eingabefeld wird die Seite nicht durch Live-Updates neu aufgebaut (erst
  nach Verlassen des Feldes). Kartenausschnitt und Scrollposition bleiben beim Aktualisieren
  erhalten. QR-/Einrichtungsseiten werden nicht mehr durch Live-Updates überschrieben.
- Der Hauptplatz (normal geöffnete Leitstelle) ist maßgeblich: Nur dort laufen die Fahrzeug-
  Automatik (Dienstzeiten, Rückkehr zur Wache, Statusfortschritt), das Abholen von Fahrzeug-/
  Anrufer-Terminal-Meldungen und das Zurücksetzen der Fahrzeuge beim Start. Er sollte während
  der Übung geöffnet bleiben. Beim Start eines Monitors werden die Fahrzeuge NICHT zurückgesetzt.
- Monitore speichern getrennt und verändern weder die eigenen Leitstellen-Daten noch die Cloud-
  Einstellungen des Geräts, auf dem sie geöffnet werden.
- Gerätebezogene Anzeigeeinstellungen (Organisations-Filter, IVENA-Bereichsfilter/-Ansicht)
  bleiben pro Gerät.
- NEU: AAOs bearbeiten statt löschen. In der AAO-Liste hat jeder Eintrag "✏️ Bearbeiten":
  Name, Meldestichwort und Alarmierung (Anzahl, Fahrzeugtyp, Organisation) sind änderbar,
  Fahrzeuge können ergänzt/entfernt werden. Standard-AAOs lassen sich per "↺ Standard
  wiederherstellen" zurücksetzen, aber nicht mehr löschen.
- WICHTIG/Korrektur: Bis v3.91 war die AAO-Tabelle nur Anzeige – die Disposition lief fest
  programmiert, Änderungen an der AAO hatten keine Wirkung, und die Tabelle wich teils vom
  tatsächlichen Verhalten ab (z. B. "Person im Wasser" ohne HLF/RTW). Ab v3.92 steuert die AAO-
  Tabelle den Alarmvorschlag tatsächlich. Die Standard-AAOs wurden einmalig so angepasst, dass
  sie exakt dem bisherigen Verhalten entsprechen; ergänzt wurden die bisher fehlenden Einträge
  "Boot in Notlage", "VU ohne eingeklemmte Person" und "Technische Hilfeleistung".
  Auch die Bedingungen der Standard-AAOs sind änderbar ("✏️ Bedingungen ändern"). Danach
  greift diese AAO wie eine eigene AAO nur noch über ihre neuen Bedingungen (Fahrzeuge werden
  zusätzlich alarmiert, Stichwort angehängt); der feste Abfragezweig alarmiert dafür nichts mehr.
  "↺ Standard wiederherstellen" stellt den Ursprungszustand wieder her.
  Sonderlogiken bleiben erhalten: NKTW als First Responder bei Reanimation, NKTW→RTW-Ersatz bei
  R0, MANV-RTW-Anzahl mind. 1 je 3 Verletzte, keine doppelten RTW/NEF bei Reanimation.
- Eigene AAOs: frei wählbare Bedingungen auf die Notrufabfrage (Ereignis, Anzahl z. B. ">3",
  Wasserzustand, eingeklemmt, XABCDE …) und Aktiv-Schalter. Passen alle Bedingungen, werden
  ihre Fahrzeuge zusätzlich alarmiert und ihr Stichwort angehängt. Früher angelegte eigene AAOs
  (die nie eine Wirkung hatten) starten deaktiviert, damit sie nicht ungeprüft mitalarmieren.
- Fehler behoben: Beim allerersten Start (leerer Speicher) waren Standardwerte und laufende Daten
  dasselbe Objekt – Änderungen konnten die mitgelieferten Standards verändern.
- Service-Worker-Cache erneuert (v2), damit die neue Version sicher geladen wird.
- JavaScript-Syntax geprüft; Playwright-Tests mit lokalem Firebase-Nachbau (inkl. Streaming):
  Monitor per Link öffnen + Ansichtswahl, Abgleich Hauptplatz→Monitor und Monitor→Hauptplatz,
  gleichzeitige Änderungen an zwei Fahrzeugen, Notruf auf dem Monitor starten, Eingabeschutz
  beim Tippen, Neuladen des Hauptplatzes, AAO bearbeiten/zurücksetzen/anlegen/deaktivieren/
  löschen inkl. Wirkung auf den Alarmvorschlag und Sync, Standard-Stichworte unverändert,
  Fahrzeugterminal-Link unverändert. Nicht gegen die echte Firebase-Datenbank getestet (aus der
  Testumgebung nicht erreichbar).

Version 3.93:
- NEU: Freitext in der Notrufabfrage. Als letzte Frage vor "Vorschlag alarmieren" kommt
  "📝 Freitext – weitere Angaben des Anrufers" (mit Knopf "Keine weiteren Angaben"). Der Text
  erscheint im Abfrageverlauf und als "Notruf-Freitext" im Meldetext.
- NEU: AAO-Bedingung "Freitext enthält". Beispiel "zucker, diabet" greift, wenn eines der
  Wörter im Freitext vorkommt (Groß-/Kleinschreibung egal).
- Der in der Leitstelle gepflegte AAO-Stand (Sitzung JET-BKRCXA, 29.09.2026) ist jetzt der
  Standard – inkl. der eigenen AAOs "Bewusstseinsstörung leicht" und "Feuer groß". Er wird auf
  allen Geräten einmalig übernommen; "↺ Standard wiederherstellen" führt auf diesen Stand zurück.
- Eigene AAOs füllen jetzt nur noch auf, was im Vorschlag fehlt, statt doppelt zu alarmieren
  (vorher z. B. 2× RTW bei "Med. Notfall" + "Bewusstseinsstörung leicht").
- Reanimation: Steht ein NKTW in der AAO, wird er als First Responder genutzt und nicht
  zusätzlich ein zweiter NKTW vorgeschlagen.
- JavaScript-Syntax geprüft; Playwright-Tests: Freitext-Schritt vor Alarmierung, Freitext-
  Bedingung, Meldetext, neue Standard-AAOs, Reanimation, Monitor-Sync unverändert.

Version 3.94:
- AAO "Feuer groß": Bedingung "Verkehrsunfall" entfernt – greift jetzt bei "Menschen durch
  Feuer gefährdet = ja" und mehr als 1 Betroffenen. Wird auf allen Geräten einmalig angepasst.

Version 3.95:
- Passen mehrere AAOs, wird nur noch die höchste alarmiert: die mit den meisten Fahrzeugen, bei
  Gleichstand die spezifischere (später geprüfte, z. B. XABCDE vor Grundstichwort). Stichwort =
  Stichwort dieser AAO. In der Live-Bewertung steht, welche AAO gewählt wurde und welche
  ebenfalls gepasst hätten.
- Unverändert als Zusatz: R0-Herabstufung (NKTW statt RTW/NEF), NKTW-First-Responder bei
  Reanimation, ELW/DRK-Zusatzlogik.
- Folge: Ergänzungen aus kleineren AAOs entfallen, z. B. kein NEF bei "Person im Wasser" +
  Atemstillstand, kein HLF bei MANV nach Verkehrsunfall.

Version 3.96:
- Ausnahme zu "nur die höchste AAO": RTW/NEF aus den XABCDE-AAOs (RD_X, RD_A, RD_B, RD_C,
  RD_D) kommen immer dazu, aufgefüllt statt doppelt (ist schon ein RTW im Vorschlag, kommt nur
  der NEF). Das XABCDE-Stichwort wird dann angehängt.

Version 3.97:
- Technischer Hinweis: Dieser Stand wurde auf Basis des GitHub-Repos (hnw6byyvng-eng/Leitstelle,
  Stand v3.96) weitergeführt, da parallel in einem anderen Chat bereits bis v3.96 gearbeitet und
  direkt nach GitHub gepusht wurde (u. a. Monitor-Funktion, editierbare AAO-Tabelle, Freitext-
  Frage). Die vorher hier (in diesem Chat) bis v3.93 entwickelten Punkte – Anrufer-112-Wahlflow
  mit Standort-Übernahme und IVENA-Klinikdaten waren in v3.90/3.91 bereits identisch auf GitHub
  gelandet; neu in v3.97 gegenüber v3.96 sind die folgenden drei Punkte:
- NEU: Reanimations-Kurzabfrage. Sobald bei "Was ist passiert?" "❤️ Reanimation / bewusstlos"
  ausgewählt wird – oder mitten in einer anderen Abfrage bei der Atmungsfrage "Keine normale
  Atmung" angegeben wird – werden die einzelnen X-A-B-C-D-E-Fragen nicht mehr einzeln gestellt,
  sondern automatisch mit plausiblen Standardwerten übersprungen (RTW+NEF sind über das
  Stichwort "REANIMATION R1N1" ohnehin schon vorgeschlagen). Real weiter erfragt werden: Ort,
  Anzahl Betroffener, weitere Gefahren, Alter/Name/Geschlecht der Person sowie der seit v3.93
  vorhandene, eigene Freitext-Schritt.
- NEU: In der Notrufabfrage kann jetzt mit "⬅️ Zurück" die letzte Antwort zurückgenommen
  werden (auch mehrfach hintereinander). Automatisch übersprungene Fragen (z. B. "nicht
  zutreffend" oder die neue Reanimations-Kurzabfrage) werden dabei automatisch mit
  zurückgenommen, sodass man direkt wieder bei der zuletzt selbst beantworteten Frage landet.
  Der Button erscheint nur, solange der Einsatz noch nicht alarmiert wurde.
- Mögliche Ursache für "SDS kommt nicht an" / "Alarmton fehlt" / "Dienstplan-Automatik (07:00/
  19:00) schaltet nicht zuverlässig" gefunden und entschärft: Läuft die Leitstelle (Hauptplatz)
  oder ein Fahrzeug-/Nachbar-/Anrufer-Terminal in einem Hintergrund-Tab oder mit gesperrtem
  Bildschirm, drosseln Browser (besonders mobil/iOS) die 1–3-Sekunden-Hintergrund-Timer stark
  oder pausieren sie sogar ganz. Neue SDS-Nachrichten, Einsätze, Notrufe (und damit auch der
  zugehörige Alarmton) sowie der automatische Dienstplanwechsel wurden dadurch teils erst mit
  großer Verzögerung erkannt. Leitstelle und alle Terminals holen die Prüfung jetzt zusätzlich
  sofort nach, sobald das Gerät wieder entsperrt/die Seite wieder sichtbar wird bzw. den Fokus
  bekommt. Die neue Monitor-/Sync-Funktion (Live-Streaming) ist von dieser Drosselung übrigens
  nicht betroffen – nur die älteren, weiterhin für Fahrzeug-/Anrufer-Terminals und die
  Dienstplan-Automatik genutzten Poll-Intervalle.
  Ehrlich gesagt: Ich konnte "SDS kommt nicht an"/"Alarmton fehlt" nicht an einer echten
  Mehrgeräte-Firebase-Umgebung nachstellen; der Code dafür war beim Durchsehen unverändert/
  korrekt. Das Hintergrund-Timer-Problem ist die plausibelste Erklärung, die sich im Code finden
  ließ – bitte nach dem Testen kurz zurückmelden, ob es jetzt zuverlässiger läuft.
- JavaScript-Syntax geprüft; Playwright-Tests: komplette Reanimations-Kurzabfrage bis zum
  Freitext-Schritt (inkl. Prüfung auf exakt 1× RTW/NEF/NKTW über die AAO-Gewinner-Logik),
  "Zurück" auch über die automatisch übersprungenen Fragen hinweg, sowie unverändertes
  Verhalten von Anrufer-Flow, IVENA-Daten und Organisations-Filter nach der Zusammenführung
  mit dem GitHub-Stand.

Version 3.98:
- NEU: Rettungswache Wangerooge (Siedlerstraße 43a, 26486 Wangerooge) mit
  Rettung Friesland 88/83-01 (RTW), 88/82-01 (NEF) und 88/83-02 (Reserve-RTW, startet auf
  Status 6). Quelle: bos-fahrzeuge.info, Wache 29077. OPTA-Bereich 8 = Wangerooge.
  Kartenposition der Wache ist eine NÄHERUNG (aus mapcarta-Entfernungsangaben abgeleitet).
- Inselregel: Bodengebundene Fahrzeuge vom Festland werden für Einsätze auf Wangerooge nicht
  vorgeschlagen und die Inselfahrzeuge nicht für das Festland. Luftrettung und DLRG sind
  ausgenommen. Feuerwehr Wangerooge ist noch nicht im Bestand – Feuer-/TH-Einsätze auf der
  Insel zeigen deshalb "nicht verfügbar".
- NEU: Ambulanz-/Krankentransporthubschrauber "Northern 06" (Northern Helicopter), Flugplatz
  Norden-Norddeich, Fahrzeugtyp KTH, Tagbereitschaft 08–20 Uhr (Quelle: rth.info, Stand
  08/2024). Besatzungsstärke nicht belegt, daher leer. Als Transportmittel in IVENA wählbar.

Version 3.99:
- NEU: Intensivtransporthubschrauber "Christoph Niedersachsen" (auch Christoph 86), DRF
  Luftrettung, Flughafen Hannover-Langenhagen, 24 h, Typ ITH. Laut Nds. Innenministerium der
  einzige ITH in Niedersachsen. Als Transportmittel in IVENA wählbar.
- Weitere KTHs in Niedersachsen außer "Northern 06" (Norden-Norddeich) wurden in den
  geprüften Quellen nicht gefunden.

Version 4.00:
- NEU: "＋ Rettungsmittel" öffnet ein Formular statt Eingabe-Dialogen: zuerst die Kategorie
  (DLRG, DRK, Rettungsdienst, Feuerwehr, THW, Luftrettung, Polizei), dann der Fahrzeugtyp aus den
  Typen dieser Kategorie (oder frei eingeben), dazu Kurzname, Funkrufname/OPTA, Standort,
  Besatzung, Fähigkeiten. Vorher wurde keine Organisation gespeichert – solche Fahrzeuge
  tauchten weder im Organisations-Filter auf noch wurden sie von der AAO vorgeschlagen.
- NEU: ✏️ Bearbeiten bei jedem Fahrzeug (behält Status, ID und Terminal-Link).
- Selbst angelegte Fahrzeuge bleiben bei jedem Update erhalten. Selbst gelöschte Standard-
  fahrzeuge kommen nach einem Update nicht mehr zurück.
- Fehler behoben: Ein neues Gerät, das als Hauptplatz derselben Sitzung geöffnet wurde, hat
  bisher den Sitzungsstand mit Standarddaten überschrieben (eigene Fahrzeuge und AAO-Änderungen
  wären dabei verloren gegangen). Jetzt übernimmt es den Sitzungsstand; ältere Geräte übernehmen
  zusätzlich eigene Fahrzeuge/AAOs aus der Sitzung, statt sie zu löschen.

Version 4.01:
- "Vorschlag alarmieren" funktioniert jetzt auch, wenn kein Einsatzmittel verfügbar ist. Der
  Einsatz wird angelegt und erscheint in der Übersicht; in der Alarmvorbereitung steht ein
  Hinweis. Fahrzeuge können danach per Nachforderung ergänzt werden.

Version 4.02:
- NEU: FF Wangerooge (Straße zum Westen 5): Florian Friesland 18/19-01 (MZF), 18/20-01 (TLF 8/18),
  18/45-01 (LF 8/6). Quelle: bos-fahrzeuge.info, Wache 3873 (nur als aktiv geführte Fahrzeuge,
  ohne Anhänger). Nur für Einsätze auf Wangerooge (Inselregel).
- NEU: DRK Wasserwacht Wangerooge (Rettungsboot, Strandwache). Einsatzbereit 15.05.–30.09.,
  täglich 10–18 Uhr – Saisonende ist eine Annahme. Kein Funkrufname veröffentlicht. Wird bei
  Wasser-AAOs wie ein DLRG-Rettungsboot vorgeschlagen, nur auf Wangerooge.
- Fehler behoben: Fahrzeuge mit Dienstzeiten (u. a. Northern 06, Wasserwacht, Tag-RTW/Nacht-
  NKTW) standen nach dem Neuladen auf Status 2 und wurden von der Dienstzeit-Automatik nicht
  mehr erfasst (z. B. nachts trotzdem verfügbar). Sie bekommen jetzt beim Start sofort den zur
  Uhrzeit passenden Status.

Version 4.03:
- FF Wangerooge ergänzt: 18/48-01 (HLF 20) und 18/64-01 (GW-L1) – laut Wachenübersicht auf
  bos-fahrzeuge.info vorhanden, aber nicht in deren Fahrzeugliste; auf Nutzerbestätigung.
- NEU: DLRG Wangerooge, Festrumpfschlauchboot "Olli" (Typ RTB, nur Einsätze auf Wangerooge).
  Funkrufname nicht veröffentlicht.
- NEU: Kategorie DGzRS (⚓) mit allen Stationen der niedersächsischen/bremischen Nordseeküste
  (15 Einheiten, seenotretter.de): Borkum HAMBURG (SRK), Juist HANS DITTMER, Norderney EUGEN
  (SRK) + WOLTERA, Norddeich OTTO DIERSCH, Baltrum ELLI HOFFMANN-RÖSER, Langeoog SECRETARIUS,
  Neuharlingersiel COURAGE, Wangerooge FRITZ THIEME, Horumersiel WOLFGANG PAUL LORENZ, Hooksiel
  BERNHARD GRUBEN (SRK), Wilhelmshaven PETER HABIG, Fedderwardersiel EMIL ZIMMERMANN,
  Bremerhaven HERMANN RUDOLF MEYER (SRK), Cuxhaven ANNELIESE KRAMER (SRK); jeweils mit
  Rufzeichen. Liegeplatz-Koordinaten aus Wikipedia bzw. bos-fahrzeuge.info. Keine AAO schlägt
  DGzRS automatisch vor (real Alarmierung über MRCC Bremen) – manuell oder per AAO-Editor.

Version 4.04:
- Handy-Ansicht überarbeitet: Inhalte werden nicht mehr rechts abgeschnitten (Tabellen erscheinen
  als untereinander stehende Karten), die Bereichs-Kacheln sind jetzt eine feste Leiste am
  unteren Bildschirmrand statt einer langen Spalte am Seitenende, Eingabefelder lösen auf dem
  iPhone kein automatisches Hineinzoomen mehr aus, Meldungen erscheinen oberhalb der Leiste.
  Geprüft mit 390 px Breite auf allen Seiten inkl. Notruf, Rettungsmittel-/AAO-Formular und
  Monitor-QR. iPad-/Monitor-Ansicht unverändert.

Version 4.05:
- NEU: PZC (Patientenzuweisungscode) bei IVENA-Zuweisung (Leitstelle) und IVENA-Anmeldung/-
  Zuweisung am Fahrzeugterminal: Auswahl der Rückmeldeindikation (RMI, gruppiert) und der
  Behandlungsdringlichkeit 1/2/3; der 6-stellige PZC (RMI + Alter + Dringlichkeit, Säugling = 00)
  wird live angezeigt, gespeichert und in der Liste der IVENA-Zuweisungen mit Klartext gezeigt.
  RMI und Dringlichkeit werden aus der Notrufabfrage vorbelegt (z. B. Reanimation → 131/1).
- Quelle der RMI-Liste: "PZC-Liste Version 1.0, 11.11.2022 (Brandenburg / Bund)". Die in
  Niedersachsen gültige IVENA-Liste war nicht abrufbar und kann in Einzelcodes abweichen.

Version 4.06:
- IVENA-Anmeldung/-Zuweisung an den externen Geräten (Fahrzeugterminals): Es stehen nur noch die
  Kliniken des Szenarios zur Auswahl, in dem der QR-Code erzeugt wurde – mit dem aktuellen Stand
  der Leitstelle (Abmeldungen, eigene Kliniken). Vorher kam die Liste aus einem für alle Szenarien
  gemeinsamen Speicherplatz bzw. aus dem Szenario, das zuletzt auf dem Handy offen war.
  Fahrzeug-, Nachbar- und Anrufer-Links enthalten dafür jetzt das Szenario. Bereits verteilte
  QR-Codes funktionieren weiter wie bisher; für die neue Klinik-Auswahl bitte neu erzeugen.
- PZC-Liste IVENA Niedersachsen: ivena-niedersachsen.de war von hier aus nicht erreichbar,
  Liste bleibt vorerst die Bundes-Version 1.0.

Version 4.07:
- PZC wird nicht mehr aus der Notrufabfrage vorbelegt. RMI und Dringlichkeit stehen auf
  "bitte wählen". Am Fahrzeugterminal ist der PZC Pflicht: Ohne RMI, Dringlichkeit und Alter
  lässt sich nicht anmelden/zuweisen. In der Leitstelle bleibt er optional.

Version 4.07:
- PZC-Liste auf IVENA Niedersachsen umgestellt (ivena-niedersachsen.de/pzc.php, Screenshot vom
  Nutzer): inkl. 14x ECMO, 60x Transporte, 650 Schlaganfall-Projekt LVO und den je Code
  erlaubten Dringlichkeiten (rote/gelbe/grüne Punkte). Hinweis: Screenshot war sehr klein;
  Begriffe wurden sorgfältig abgeschrieben, Einzelfehler bitte melden.
- Kein vorbelegter PZC mehr – die Besatzung wählt selbst. Neue Auswahl:
  • PZC direkt eintippen (6 Ziffern) → Begriff, Alter und Dringlichkeit werden übernommen,
  • Suchbegriff (Text oder Codeanfang),
  • Fachrichtung/Gruppe wählen und darin blättern,
  • Dringlichkeit: nur die für den Code erlaubten Stufen sind wählbar.
- Am Fahrzeugterminal ist ein vollständiger PZC jetzt Pflicht für Anmeldung/Zuweisung; in der
  Leitstelle bleibt er optional.

Version 4.08:
- NEU: IVENA-Zusatzangaben bei Anmeldung (Fahrzeugterminal) und Zuweisung (Leitstelle) als
  Kürzel nebeneinander zum Antippen: S (Schockraum), BG (BG-lich), SS (Schwanger), B (Beatmet),
  R (Reanimiert), I (Ansteckungsfähig), N (Arztbegleitet), Geschlecht M/W/D, dazu "Weitere
  Informationen". Ohne Aktion steht alles auf "–". Das Alter kommt aus dem PZC (oder wird im
  PZC-Block eingetragen) und wird nicht mehr aus der Notrufabfrage vorbelegt.
- Anzeige: unter der IVENA-Ansicht neue Liste "📥 Patientenanmeldungen" je Klinik mit PZC,
  Begriff und den Kürzeln (+ rot hervorgehoben), ebenso in den IVENA-Zuweisungen.
- Hinweis: Die genaue Kürzel-Darstellung des echten IVENA konnte ich nicht offiziell belegen;
  die Kürzel sind daran angelehnt.

Version 4.09:
- Auswahlfeld "Fachrichtung" bei IVENA-Anmeldung/-Zuweisung entfernt. Die Fachrichtung ergibt sich
  jetzt aus der PZC-Gruppe (z. B. 42x → Neurologie / Stroke Unit, 2xx → Chirurgie, 13x →
  Schockraum) und wird bei der Code-Auswahl angezeigt; sie dient weiter zur Prüfung, ob die Klinik
  diese Fachrichtung abgemeldet hat. Codes ohne passende Fachrichtung (z. B. 60x Transporte,
  70x Haut, 74x MKG, 77x, 80x) werden ohne Fachrichtung gespeichert.

Version 4.10:
- PZC-Eingabe auf ein einziges Feld "PZC" reduziert (vorher: Alter, PZC direkt, Dringlichkeit,
  Suchbegriff, Gruppe). Antippen öffnet die komplette Liste mit allen Gruppen aufgeklappt.
  Ziffern tippen = PZC direkt (Liste filtert auf den Code), Text tippen = Suche nach Begriff
  oder Gruppe. Antippen eines Codes übernimmt die RMI; danach Alter (2 Ziffern) und
  Dringlichkeit (1 Ziffer) dahinter tippen. Unter dem Feld steht, was gewählt ist und was noch
  fehlt; nicht erlaubte Dringlichkeiten werden rot gemeldet.
- Kein eigenes Altersfeld mehr – das Alter kommt nur aus dem PZC.

Version 4.11:
- Eintreffzeit bei IVENA-Anmeldung/-Zuweisung: Datum ist vorausgefüllt (heute), die Uhrzeit muss
  selbst gewählt werden (ohne Uhrzeit keine Anmeldung). Ab 23:45 Uhr steht das Datum automatisch
  auf dem nächsten Tag und die Uhrzeit auf 00:00. Vorher war "jetzt + 20 Minuten" vorbelegt.
- Doppelte PZC-Prüfung am Fahrzeugterminal entfernt (kein Funktionsunterschied).

Version 4.12:
- Updates kommen jetzt beim ersten Neuladen an: Die Seite wird immer zuerst frisch aus dem Netz
  geladen (nur offline aus dem Zwischenspeicher), und wenn eine neue App-Version aktiv wird, lädt
  sich die Seite einmal automatisch neu. Vorher konnte die alte Version noch ein- bis zweimal
  aus dem Zwischenspeicher kommen.

Version 4.13:
- Notrufabfrage: "Ist jemand eingeklemmt?" → "Wie viele Personen sind eingeklemmt oder
  eingeschlossen?" und "Sind Menschen durch Feuer/Rauch gefährdet?" → "Wie viele Personen sind
  durch Feuer/Rauch lebensgefährlich bedroht?" – jeweils mit Schnellknöpfen 0, 1, 2, 3 und
  Zahlenfeld. Ab 1 gilt wie bisher "ja" (eingeklemmt → H_Eingeklemmt, bedroht → F_2_Y, XABCDE).
- AAO-Bedingungen dafür sind jetzt Zahlen (z. B. ">0", ">=3"); bestehende Bedingungen mit
  "ja"/"nein" funktionieren weiter. Ältere Einsätze mit "ja"/"nein" werden weiter verstanden.

Version 4.14:
- Auch "Ist eine Person verletzt, erkrankt oder unmittelbar gefährdet?" ist jetzt eine
  Anzahl-Frage ("Wie viele Personen …?") mit Knöpfen 0, 1, 2, 3. Bei Reanimation, med. Notfall,
  Person im Wasser und VU wird sie wie bisher übersprungen – jetzt mit der Anzahl der Betroffenen.
  Ab 1 wird XABCDE abgefragt.

Version 4.15:
- NEU: AAO-Spalte "Mit anderen AAOs" mit drei Möglichkeiten: Nein (Standard, wie bisher nur die
  höchste AAO), Ja (mit allen passenden AAOs), Mit diesen … (aufklappbare Liste zum Anhaken).
  Zusammen alarmiert wird nur, wenn beide AAOs es erlauben (Ja oder gegenseitig angehakt). Die
  Fahrzeuge werden aufgefüllt, nicht doppelt; das Stichwort wird angehängt. In der
  Live-Bewertung steht, welche AAOs zusätzlich alarmiert werden.

Version 4.16:
- "Mit anderen AAOs": Es reicht jetzt, wenn EINE der beiden AAOs die Kombination erlaubt. Eine AAO
  auf "Ja" läuft mit allen anderen passenden AAOs zusammen, eine auf "Mit diesen …" mit den
  angehakten – egal, wie die anderen eingestellt sind.

Version 4.17:
- Kombinierte AAOs ("Mit anderen AAOs") werden jetzt vollständig dazu alarmiert – die Fahrzeuge
  addieren sich (z. B. 2× RTW, wenn beide AAOs einen RTW haben). RTW/NEF aus XABCDE werden
  weiterhin nur aufgefüllt.

Version 4.18:
- IVENA-Ansicht neu aufgebaut wie im Original: oben eine Tabelle Kliniken × Fachbereiche
  (CHI, INN, PÄD, GYN, NEU/SU, KAR/CPU, ITS, SR, PSY, HNO, AUG, URO) – grün = frei, rot =
  abgemeldet mit Uhrzeit "bis", grau = nicht vorhanden; Punkt vor dem Namen = Klinikstatus
  grün/gelb/rot; letzte Spalte = Zahl der angemeldeten Patienten.
- Darunter "Angemeldete Patienten / Fahrzeuge": nach Ankunftszeit sortiert (mit "in X min"),
  Klinik, Rettungsmittel, PZC, Indikation, Zusatzangaben-Kürzel, Fachrichtung, Anmeldezeit;
  bereits eingetroffene blass.
- Die bisherigen Bedienelemente (Status, Abmeldungen, Kliniken bearbeiten) liegen jetzt im
  aufklappbaren Bereich "⚙️ Übungssteuerung". Handy: Tabelle seitlich wischbar, Kliniknamen bleiben
  stehen.

Version 4.19:
- IVENA: Angemeldete Patienten bleiben 24 Stunden nach Ankunft sichtbar – auch wenn das
  Fahrzeug die Klinik schon wieder verlassen hat. Eingetroffene stehen grau hinterlegt mit
  "eingetroffen vor …", dazu der aktuelle Fahrzeugstatus ("wieder frei"). Die 📥-Spalte zählt
  ebenfalls die letzten 24 h. Ältere Einträge werden ausgeblendet (in "IVENA-Zuweisungen"
  bleiben sie weiter abrufbar).

Version 4.20:
- IVENA: Umschalter "🖐️ Manuell / 🎲 Automatisch" für Fachabteilungs-Abmeldungen wieder direkt
  über der Tabelle (lag seit v4.18 im zugeklappten Bereich). Manuell: grünes Feld antippen =
  Fachabteilung abmelden (Fachrichtung vorausgewählt, Schnellknöpfe 1/2/4/8 h), rotes Feld
  antippen = wieder freigeben. Automatisch: wie bisher gewürfelt, mit "Neu auswürfeln".
- "Automatisch" würfelt jetzt sofort beim Umschalten und danach laufend weiter (am Hauptplatz,
  je Klinik gelegentlich eine neue Abmeldung für 1–8 h) – vorher nur per Knopf "Neu auswürfeln".
  Gewürfelt werden nur Fachrichtungen, die die Klinik wirklich hat.

Version 4.21:
- IVENA-Zuweisungen/-Anmeldungen können nachträglich bearbeitet werden (✏️ in der IVENA-Liste
  und unter IVENA-Zuweisungen): Zielklinik, PZC, Zusatzangaben, Geschlecht, weitere
  Informationen, Eintreffzeit. Geänderte Angaben stehen danach in BLAU (Zusatzkürzel blau
  hinterlegt), mit "geändert <Zeit>". Ausnahme: Wird die Klinik geändert, gilt es als neue
  Anmeldung dort – ohne blaue Markierungen.

Version 4.22:
- Webseite umbenannt in "Leitstelle.sim": Browser-Tab, Name auf dem Homebildschirm (App-Name)
  und oben links neben der Versionsnummer. Gespeicherte Daten und Links bleiben unverändert.

Version 4.23:
- Vorbereitung Umzug auf lst-sim.github.io: Die neue Adresse übernimmt beim ersten Aufruf über
  die Weiterleitung von der alten Adresse automatisch die Live-Verbindung (Sitzung) und die
  Geräteeinstellungen und holt dann den kompletten Leitstellen-Stand aus der Sitzung.

Version 4.24:
- Nachbar-Landkreis: Ist der eigene RTW/NEF weiter als 20 km Luftlinie entfernt (oder keiner
  frei), wird das nächste freie Fahrzeug aus dem Nachbar-LK vorgeschlagen (🤝) und bei der
  Alarmierung ausgeliehen. Ein NKTW als First Responder wird nur noch bis 20 km vorgeschlagen.
- KTWs Landkreis Friesland ergänzt (Quelle: bos-fahrzeuge.info): 84/91-01 und 84/91-02 (Sande),
  87/91-01 (Bockhorn, RW Friesische Wehde).
- Neuer Button "🚑 Krankentransport annehmen": Meldung KT-Entlassung / KT-Verlegung /
  KT-Einweisung, dann Abholort (für die Fahrzeugwahl nötig), dann Freitext. Vorschlag: nächster
  freier KTW, sonst NKTW. Keine Sonderrechte, deutlich längere Anfahrtszeit.
- KTWs werden bei Notfällen nie vorgeschlagen, stehen aber unter "Rettungsmittel bearbeiten"
  zur manuellen Auswahl.
- AAO "+ Fahrzeug": Auswahl "Vollalarm DLRG <Ort>" und "Vollalarm DRK <Ort>" – alarmiert alle
  Fahrzeuge dieser Ortsgruppe.
- IVENA MANV: Unter IVENA-Zuweisung "🚨 MANV: mehrere Fahrzeuge" – mehrere Fahrzeuge (Status 4)
  auf einmal derselben Klinik zuweisen, je Fahrzeug optional eigener PZC; alle gehen auf Status 7.

Version 4.25:
- AAO-Fahrzeuge: Bei der Anzahl gibt es jetzt "Pat." – dann kommen so viele Fahrzeuge dieses
  Typs wie Patienten (z. B. RTW je Patient). Patientenzahl = höchste Angabe aus "Wie viele
  Personen betroffen", "verletzt/erkrankt/gefährdet", "eingeklemmt" und "durch Feuer
  bedroht", mindestens 1.

Version 4.26:
- AAO "+ Fahrzeug": statt einer Ortsgruppe pro Eintrag gibt es nur noch "Vollalarm DLRG" und
  "Vollalarm DRK". Alarmiert werden alle freien Fahrzeuge der Ortsgruppe, die dem Einsatzort am
  nächsten ist (mit mindestens einem freien, erreichbaren Fahrzeug). Bereits gespeicherte
  Einträge mit fester Ortsgruppe funktionieren weiter.

Version 4.27:
- KTWs stehen in den Listen jetzt ganz unten: Fahrzeugübersicht (Einsatzmittel), Auswahl unter
  "Rettungsmittel bearbeiten"/Nachforderung, "Fahrzeuge bearbeiten" (Auswahlliste) und die
  Liste der nächsten freien Fahrzeuge im Notruf.

Version 4.28:
- Nachbar-Landkreis fährt nie zu R0-Einsätzen (ohne Sonderrechte) – dann wird das eigene
  Fahrzeug vorgeschlagen, auch wenn es weiter als 20 km entfernt ist.
- Alarmierungsfenster: Einsatzstufe manuell wählbar – R0 (ohne Sonderrechte), R1 (mit
  Sonderrechten, ohne NEF), R1N1 (mit NEF) oder "Automatisch". Das Stichwort wird angepasst
  (z. B. R1_Med. Notfall → R0_Med. Notfall) und der Fahrzeugvorschlag neu berechnet.
- Notrufabfrage: neue Frage "Psy Problem?" (Ja/Nein) nach XABCDE. Steht bei "Ja" im
  Alarmtext und ist als AAO-Bedingung "Psy Problem" wählbar.
- Fehler behoben: Ein Fahrzeug konnte doppelt im Vorschlag stehen (z. B. NKTW als First
  Responder und zusätzlich als NKTW).

Version 4.29:
- AAO: Fahrzeuge können als "optional" markiert werden (Haken neben dem Fahrzeug im
  AAO-Editor, in der Liste mit "optional" gekennzeichnet). Optionale Fahrzeuge werden nicht
  automatisch alarmiert, sondern im Fenster "Alarmierung vorbereiten" unter "Optionale
  Fahrzeuge (AAO)" mit dem nächsten freien Fahrzeug zum Anhaken angeboten. Nur angehakte
  werden mit alarmiert. Ein optionaler "Vollalarm DLRG/DRK" ist ein einziger Haken für die
  ganze nächste Ortsgruppe. Angeboten werden die optionalen Fahrzeuge der AAO(s), die
  tatsächlich alarmiert wird/werden.

Version 4.30:
- "Psy Problem?" wird nur noch gefragt, wenn auch E (XABCDE) abgefragt wurde – sonst
  "nicht erhoben" (z. B. Feuer, Technische Hilfe, Reanimation mit Abkürzung).

Version 4.31:
- NKTW als First Responder nur noch, wenn er in der Reanimations-AAO eingetragen ist (bisher
  kam er bei Reanimation immer automatisch dazu). Weiterhin nur bis 20 km Entfernung.

Version 4.32:
- IVENA: Gelöschte Anmeldungen/Zuweisungen verschwinden nicht mehr, sondern bleiben
  durchgestrichen (grau, mit "gelöscht <Uhrzeit>") in der Liste stehen – unter
  IVENA-Zuweisungen und in der IVENA-Ansicht bei "Angemeldete Patienten / Fahrzeuge".
  Dort gibt es jetzt auch einen 🗑️-Knopf. Gelöschte zählen nicht mehr als ankommende Patienten
  und werden nicht mehr als Fahrziel des Fahrzeugs verwendet.

Version 4.33:
- IVENA-Ansicht wie im echten System: Unter der Kapazitäts-Tabelle "Patientenzuweisungen
  (Klinikansicht)" – zuerst das Krankenhaus auswählen (Anzahl der Anmeldungen steht in der
  Auswahl), dann stehen alle Zuweisungen der letzten 24 h für dieses Haus in einer Tabelle:
  Eintreffzeit, Rettungsmittel, PZC, Indikation, Fachbereich, je eine Spalte für S, BG, SS,
  B, R, I, N (rot mit X = ja), Geschlecht, Alter, Info, Anmeldezeit. Gelöschte stehen
  durchgestrichen unten. Die Auswahl merkt sich jedes Gerät selbst.

Version 4.34:
- IVENA: KTWs können jetzt zugewiesen werden (Einzelzuweisung, MANV-Sammelzuweisung,
  Fahrzeugterminal des KTW und Anmeldung durch NEF/OrgL), sobald sie in Status 4 sind.

Version 4.35:
- Die Klinikansicht "Patientenzuweisungen" (Krankenhaus wählen → Tabelle) steht jetzt nur noch
  unter 📋 IVENA-Zuweisungen und ersetzt dort die bisherige Gesamtliste. Die IVENA-Ansicht zeigt
  nur noch die Kapazitäts-Tabelle (mit der Spalte "📥 24h").

Version 4.36:
- IVENA-Zuweisungen im Aufbau wie das echte IVENA: "Bitte wählen Sie einen
  Versorgungsbereich" (Auswahl), "Bitte wählen Sie ein Krankenhaus" (Knöpfe, gewähltes grau),
  darunter die gelbe Tabelle: Patienten-Übergabe-Punkt, Behandlungsdringlichkeit (SK aus dem
  PZC), Alarmzeit/Eintreffzeit (blau), Schockraum, Herzkatheter, Anlass, BG-Fall/Schwanger,
  M/W/Alter, Beatmet/Reanim., Ansteckungsfähig, Fachbereich/Diagnose (grün, rot wenn
  abgemeldet), Leitstelle, Zuweisung/VAK-Nr., Arztbegleitet, Transportmittel/Bemerkung, dazu
  "Abgerufen am …". Neueste Alarmzeit oben.
- Neue Zusatzangabe H (Herzkatheter) bei den Zuweisungen.
- Noch nicht abgebildet (fest eingetragen): Übergabepunkt immer "Notaufnahme", Anlass "k.A.",
  Zuweisung "RD", Leitstelle "LST FRI/WHV" ohne Telefonnummer.

Version 4.37:
- IVENA: Neues Feld "Anlass" bei jeder Zuweisung (Einzel, MANV, Fahrzeugterminal, Bearbeiten):
  k.A., Häuslicher Einsatz, aus Arztpraxis, Öffentlicher Raum, Verkehrsunfall, Arbeitsunfall,
  Sportunfall, Schulunfall, Pflegeeinrichtung, Verlegung, Sonstiges. Steht in der Spalte
  "Anlass"; nachträgliche Änderung wird blau.
- Spalte "Zuweisung": RD, wenn das Rettungsmittel selbst (Fahrzeugterminal) angemeldet hat,
  LST, wenn die Leitstelle angemeldet hat.

Version 4.38:
- Eingehender Notruf (Anrufer-Terminal) in der Leitstelle ohne Ton – nur noch visuell über die
  rote Leiste (und kurze Einblendung).

Version 4.39:
- Anrufer-Terminal: Nach dem Wählen der 112 ertönt ein Freiton ("Tuten", 425 Hz, 1 s Ton /
  4 s Pause) statt des Alarmtons – so lange, bis die Leitstelle den Notruf annimmt.

Version 4.40:
- Anrufer-Terminal als normale Handy-Wähltastatur (0–9, *, #, Löschen, grüner Hörer). Die
  Nummer muss selbst gewählt werden:
  112 → Notruf (wie bisher), 110 → Polizei, 116 117 → Ärztlicher Bereitschaftsdienst
  (Leitstelle sieht die Nummer in der roten Leiste, Abfrage startet mit dieser Nummer →
  Weiterleitung), 19222 (auch mit Vorwahl) → Krankentransport-Abfrage.
  Andere Nummern: "Kein Anschluss unter dieser Nummer."

Version 4.41:
- Eigene AAOs und Fahrzeuge bleiben unangetastet: Selbst angelegte/geänderte Fahrzeuge werden
  nicht mehr automatisch verändert (bisher wurde z. B. der Standort aus dem Funkrufnamen
  zurückgesetzt). Wird bei einem Standardfahrzeug der Funkrufname geändert, taucht das
  Original nicht mehr doppelt wieder auf. Gelöschte eigene AAOs bleiben gelöscht. Künftige
  Updates ergänzen nur noch fehlende neue Standardeinträge.
- First in – first out je Wache: Stehen mehrere gleiche Fahrzeuge auf derselben Wache frei,
  wird das vorgeschlagen, das am längsten frei ist.
- Telefonat-Leiste: Oben über allem läuft eine grüne Leiste mit der Gesprächsdauer, solange
  ein Notruf/Krankentransport-Anruf nicht aufgelegt ist – mit Knopf "📵 Auflegen" (und
  "Öffnen" für geparkte Gespräche). Aufgelegt wird mit Dauer im Verlauf vermerkt; beim
  Abschließen des Einsatzes wird automatisch aufgelegt.
- Anrufer-Terminal: alle Ansichten (Wählen, Klingeln, Gespräch, Ende) im selben Handy-Layout,
  mit Gesprächszeit und rotem Auflegen-Knopf. Legt die Leitstelle auf, sieht der Anrufer
  "Anruf beendet"; legt der Anrufer auf (oder bricht beim Klingeln ab), sieht die Leitstelle
  "Anrufer hat aufgelegt".

Version 4.42:
- Fehler behoben: Optionale Fahrzeuge wurden im Fenster "Alarmierung vorbereiten" nicht immer
  zum Anhaken angeboten – z. B. bei Standard-AAOs, die über den festen Abfragezweig laufen, und
  bei AAOs, die nur optionale Fahrzeuge enthalten. Jetzt werden die optionalen Fahrzeuge aller
  passenden AAOs angeboten.

Version 4.43:
- AAOs und Fahrzeuge sichern/laden: Auf der AAO-Seite "💾 AAOs sichern" / "📂 AAOs laden",
  bei den Rettungsmitteln "💾 Fahrzeuge sichern" / "📂 Fahrzeuge laden". Sichern erzeugt eine
  Datei (iPad: Teilen-Menü → "In Dateien sichern", AirDrop, Mail …). Laden ersetzt die aktuelle
  Liste durch die aus der Datei (bei Fahrzeugen bleiben laufende Status erhalten). Die Datei
  kann auch an Claude geschickt werden, um den Stand fest als Standard einzubauen.

Version 4.44:
- Fahrzeug bearbeiten/anlegen: neuer Bereich "🕒 Dienstzeiten" – "Immer im Dienst" oder "Nur zu
  bestimmten Zeiten" mit Uhrzeit von/bis (auch über Mitternacht, z. B. 19:00–07:00),
  Wochentagen und optionalem Zeitraum im Jahr (TT.MM.–TT.MM., z. B. Saison). Innerhalb der
  Zeiten Status 1, außerhalb Status 6; ein bewusst gesetzter Status 2 bleibt.
- Die bisher fest eingebauten Zeiten (Tag-RTWs, Nacht-NKTWs Jever/Varel, NKTW Sande, RTW
  Bockhorn, Northern 06, Wasserwacht Wangerooge) sind jetzt als vorausgefüllte Dienstzeiten im
  Editor sichtbar und änderbar. In der Fahrzeugliste steht die Dienstzeit unter dem Fahrzeug.

Version 4.45:
- Fahrzeuge stehen standardmäßig auf Status 2 (frei auf Wache) statt 1: bei den
  mitgelieferten Fahrzeugen, beim Programmstart, bei "Realistisch" und zu Dienstbeginn
  (Dienstzeiten: Beginn → Status 2, Ende → Status 6). Bereits laufende Installationen: freie
  Fahrzeuge in Status 1 ohne Einsatz werden einmalig auf 2 gesetzt.

Version 4.46:
- AAOs und Fahrzeuge werden in GitHub gespeichert statt auf dem Gerät: Buttons
  "☁️ AAOs in GitHub speichern" / "☁️ Fahrzeuge in GitHub speichern" und "📥 Aus GitHub laden".
  Gespeichert wird als data/<szenario>-aao.json bzw. data/<szenario>-units.json im Repository.
- Einmalig pro Gerät wird ein GitHub-Zugangsschlüssel (Fine-grained Token, nur
  lst-sim.github.io, Contents: Read and write) eingegeben (🔑, mit Anleitung). Danach wird jede
  Änderung an AAOs/Fahrzeugen automatisch in GitHub gespeichert.
- Jedes Gerät lädt beim Start automatisch den neuesten GitHub-Stand (nur wenn neuer als der
  zuletzt übernommene). Laufende Fahrzeugstatus bleiben dabei erhalten.
- Datei-Sicherung (v4.43) entfällt zugunsten von GitHub.

Version 4.47:
- AAOs und Fahrzeuge werden jetzt OHNE Einrichtung automatisch dauerhaft gespeichert – in der
  Live-Datenbank auf einem festen Speicherplatz (unabhängig von der Sitzung). Jede Änderung
  (AAO speichern/löschen/zurücksetzen, Fahrzeug speichern/löschen) wird sofort hochgeladen,
  jedes Gerät lädt beim Start den neuesten Stand. Offline gemachte Änderungen werden beim
  nächsten Start nachgeholt.
- Beim ersten Start dieser Version legt ein bereits genutztes Gerät seinen Stand als
  dauerhaften Stand ab. Hat ein weiteres Gerät eigene, abweichende Änderungen, wird einmal
  gefragt, welcher Stand gelten soll.
- Buttons: "☁️ Speichern" (von Hand) und "📥 Gespeicherten Stand laden". GitHub (🔑) ist nur
  noch eine optionale zusätzliche Sicherung.

Version 4.48:
- IVENA MANV-Sammelzuweisung: je Fahrzeug kann eine eigene Zielklinik gewählt werden (unter dem
  Fahrzeug, Standard = "wie oben"). Die Klinik oben gilt für alle ohne eigene Auswahl.
- Fehler behoben: Bei einem ungültigen PZC wurden vorher schon die Fahrzeuge davor zugewiesen.
  Jetzt werden erst alle PZC geprüft, dann wird zugewiesen.

Version 4.49:
- AAO-Editor: neuer Bereich "Nie zusammen mit" – AAOs ankreuzen, die nie zusammen mit dieser
  alarmiert werden dürfen. Der Ausschluss gilt in beide Richtungen und schlägt jede Erlaubnis
  ("Mit anderen AAOs: Ja/Mit diesen …"); passen beide, gilt nur die höhere. Gilt auch für die
  immer dazukommenden RD-AAOs aus XABCDE und für optionale Fahrzeuge. In der AAO-Liste mit
  "⛔ nie mit: …" angezeigt.

Version 4.50:
- Notrufabfrage, Pfad Feuer: neue Seite direkt nach "Was ist passiert?" mit zwei Auswahlen –
  "Was ist zu sehen?" (Feuerschein, Offene große Flammen, Brandgeruch, Rauchentwicklung) und
  darunter "Was brennt?" (Einfamilienhaus, Mehrfamilienhaus, Fabrik, Wald/Wiese, Kleinbrand),
  dann "Weiter" (nicht Gewähltes = k.A.). Steht im Alarmtext und ist als AAO-Bedingung
  ("Feuer – was ist zu sehen" / "Feuer – was brennt") wählbar. Bei anderen Lagen entfällt die
  Seite.

Version 4.51:
- AAO-Bedingungen "entweder – oder": Neben jeder Bedingung ein Haken "oder". Von allen mit
  "oder" markierten Bedingungen muss nur EINE passen, alle anderen müssen immer passen. Das
  gleiche Feld kann dafür mehrfach vorkommen (z. B. Feuer + Einfamilienhaus oder
  Mehrfamilienhaus). In der AAO-Liste blau als "entweder … oder …" angezeigt.

Version 4.52:
- Alle AAOs löschbar, auch die Standard-AAOs (mit Sicherheitsabfrage). Eine gelöschte
  Standard-AAO alarmiert nichts mehr und kommt bei Updates nicht wieder. Über
  "↺ Gelöschte Standard-AAOs" (erscheint nur, wenn welche gelöscht sind) lassen sie sich
  zurückholen.

Version 4.53:
- XABCDE-Abfrage mit getrennten Knöpfen: A "Gefährdet" / "Verlegt", C "Auffällig" /
  "Schockzeichen", D "Krampfanfall" / "Neurologisch auffällig". Auch als AAO-Bedingungen
  einzeln wählbar. Die Standard-AAOs RD_A, RD_C und RD_D greifen weiterhin bei beiden Werten
  (wie bisher); ältere AAOs mit den früheren zusammengefassten Werten passen auf beide.

Version 4.54:
- Fehler behoben: "Nie zusammen mit" wurde nicht überall beachtet. Jetzt wird die Liste der
  aktiven AAOs Schritt für Schritt aufgebaut (höchste zuerst, dann XABCDE, dann weitere nach
  Größe) – jede weitere AAO kommt nur dazu, wenn sie sich mit KEINER bereits aktiven ausschließt.
- Optionale Fahrzeuge werden nur noch aus den tatsächlich aktiven AAOs angeboten (nicht mehr
  aus ausgeschlossenen oder unterlegenen AAOs).
- MANV ist ein Zusatz zur eigentlichen Lage: Die AAO der Lage (z. B. Verkehrsunfall, Feuer)
  wird bei MANV jetzt mit alarmiert – außer sie ist ausgeschlossen; dann steht sie auch nicht
  mehr im Stichwort.
- Im Alarmierungsfenster und in der Live-Bewertung steht jetzt, welche AAO alarmiert wird,
  welche zusätzlich und welche "⛔ ausgeschlossen" wurden.

Version 4.55:
- MANV-Stichwort nennt die Lage (z. B. F_2_Y) nur noch, wenn deren AAO auch wirklich alarmiert
  wird. Vorher stand z. B. "F_2_Y" im Stichwort, obwohl die AAO "Feuer mit
  Personengefährdung" gar nicht gegriffen hat (ihre Bedingungen passten nicht).

Version 4.56:
- IVENA kompakter, damit alles auf einen Bildschirm passt: Kapazitäts-Tabelle mit einzeiligen
  Klinikzeilen, kleinerer Schrift und fester Spaltenbreite; Patientenzuweisungen
  (Klinikansicht) mit kleinerer Schrift ohne Mindestbreite; Kopfbereiche und Knöpfe kleiner.
- MANV-Sammelzuweisung je Fahrzeug: "S+ Schockraum", "N+ NEF / arztbegleitet" (optional mit
  begleitendem NEF in Status 4, das ebenfalls auf 7 geht) und ein eigenes Info-Feld. Ein NEF
  kann nur bei einem Patienten mitfahren.

Version 4.57:
- "Rettungsmittel bearbeiten" und "Nachforderung": Auswahl nach Kategorie wie bei den
  Fahrzeugen (⭐ Häufig, DLRG, DRK, Rettungsdienst, Feuerwehr, THW, Luftrettung, DGzRS …). Je
  Kategorie alle Fahrzeugtypen dieser Organisation mit dem nächsten freien Fahrzeug.
- THW nach Fachgruppe: Zugtrupp, Bergungsgruppe, FGr Notversorgung/Notinstandsetzung,
  FGr Elektroversorgung, OV – mit "Ganze Fachgruppe" (alle freien Fahrzeuge der Gruppe auf
  einmal) oder einzelnen Fahrzeugen. Die Zuordnung ist aus den Fahrzeugangaben abgeleitet und
  im Fahrzeug-Editor (Feld "THW-Fachgruppe") änderbar.

Version 4.58:
- Rettungsmittel bearbeiten / Nachforderung: In jeder Kategorie stehen jetzt ALLE Fahrzeuge,
  nach Typ gruppiert und nach Entfernung sortiert – jedes einzeln wählbar (mit Status bzw.
  "bereits im Einsatz"), dazu je Typ "Nächstes freies".
- Bereitstellungsort bei Einsätzen auf dem Wasser: Im Alarmierungsfenster "🅿️ Bereitstellungsort
  für Landfahrzeuge" (erscheint automatisch, wenn der Einsatzort auf dem Wasser liegt, sonst
  über einen Knopf). Ort per Adresse festlegen und optional als festen Bereitstellungsort
  speichern; gespeicherte Orte nach Entfernung zur Auswahl. Alle Landfahrzeuge werden dann mit
  der Entfernung zum Bereitstellungsort vorgeschlagen, fahren auf der Karte dorthin und sehen
  ihn am Fahrzeugterminal ("🅿️ Bereitstellungsraum anfahren"); nur Boote, Hubschrauber und
  DGzRS fahren direkt zur Einsatzstelle. Steht auch im Alarmtext.

Version 4.59:
- Insel Wangerooge strikt: Fahrzeuge der Insel kommen nicht aufs Festland und Festland-
  Fahrzeuge nicht auf die Insel – nur Hubschrauber fliegen rüber (bisher durften auch DGzRS und
  DLRG-Boote vom Festland). Gilt für Vorschlag, Krankentransport, Vollalarm, THW-Fachgruppen,
  "Fahrzeuge bearbeiten" und die Auswahl beim Nachfordern (dort mit Hinweis 🏝️). Kein
  Nachbar-LK auf der Insel. Ausnahme: Liegt der Einsatzort auf dem Wasser, dürfen Boote hin.

Version 4.60:
- Bereitstellungsort auf der Karte wählen: "🗺️ Auf Karte wählen" im Alarmierungsfenster bzw.
  "🅿️ Bereitstellungsort" am laufenden Einsatz öffnet die Karte im Auswahlmodus – Tippen setzt
  den Ort (Name wird vorgeschlagen und gespeichert).
- Karte: Bereitstellungsräume werden als "🅿️ BR" angezeigt; Landfahrzeuge fahren dorthin und
  stehen dort (Status 4), Boote/Hubschrauber an der Einsatzstelle.
- Bereitstellungsort auch nach der Alarmierung änderbar (alarmierte Fahrzeuge bleiben, nur das
  Ziel der Landfahrzeuge ändert sich); Änderung steht im Einsatzverlauf.

Version 4.61:
- FTZ Landkreis Friesland (Jever) ergänzt (Quelle: BOS-Fahrzeuge, Wache "LK Friesland FTZ
  Jever", nur aktive Fahrzeuge): WLF 19/65-01, 19/66-01, 19/66-03, 19/79-01 sowie die
  Abrollbehälter 19/AB-G, 19/AB-HFS 04, 19/AB-Küche1, 19/AB-Küche2, 19/AB-Logistik,
  19/AB-Mulde, 29/AB-TEL und 19/AB-Übungscontainer Leckage. Langformen von "AB-G" und
  "AB-HFS" sind nicht bestätigt.
- Abrollbehälter nur mit WLF: Ein AB wird nur vorgeschlagen/alarmiert, wenn ein WLF ihn holen
  kann. Freies WLF: lädt den AB an der FTZ (5 min) und fährt zum Einsatz. Kein freies WLF: ein
  WLF, das an einem anderen Einsatz steht, setzt dort seinen AB ab (der bleibt dort), fährt zur
  FTZ, lädt den neuen AB und fährt zum neuen Einsatz – entsprechend längere Anfahrt. Steht im
  Vorschlag ("holt … an der FTZ, kommt von Einsatz #… und setzt dort ab · ca. … min") und im
  Verlauf beider Einsätze. Auf der Karte bleibt der AB an der FTZ, bis das WLF ihn geladen hat.
  Ohne WLF: "kein WLF". Gilt für AAO, Nachforderung und "Rettungsmittel bearbeiten".

Version 4.62:
- Alarmierung nach Eintreffzeit statt Kilometern: Vorschläge, "Nächstes freies",
  Nachforderung und Anzeigen nutzen die geschätzte Eintreffzeit (Ausrückzeit + Fahrzeit) und
  zeigen nur noch "ca. X min" (keine km mehr).
- Fahrzeit: Straße ≈ 1,3 × Luftlinie, mit Sonderrechten ~60 km/h, ohne (R0) ~45 km/h;
  Hubschrauber ~200 km/h, Boote ~30 km/h (SRK ~35 km/h).
- Ausrückzeiten (Standard, je Fahrzeug im Editor änderbar): hauptamtlicher Rettungsdienst und
  Nachbar-LK 1 min, Luftrettung 3 min, FTZ 2 min, DGzRS-Seenotrettungskreuzer 2 min,
  Freiwillige Feuerwehr 6 min, DLRG 10 min, DGzRS-Freiwilligenstationen 10 min, DRK 12 min,
  THW 15 min. Status 1 (frei über Funk): keine Ausrückzeit.
- Nachbar-LK: RTW/NEF aus dem Nachbarkreis wird vorgeschlagen, wenn es schneller da ist als das
  eigene (bisher: eigenes > 20 km). Hinweis "Nachbar anfragen", wenn kein eigenes RTW/NEF
  innerhalb von 15 min da ist. First Responder nur, wenn er schneller als das RTW und ≤ 15 min ist.

Version 4.63:
- IVENA im Handymodus aufgeräumt:
  - Kapazitätsübersicht: Fachbereichs-Kürzel stehen senkrecht (keine Überlappung mehr),
    Kliniknamen einzeilig (gekürzt, voller Name beim Antippen/Hovern), Ort ausgeblendet,
    kleinere Knöpfe – die ganze Tabelle passt auf den Bildschirm.
  - Zuweisungen: statt der 16-spaltigen Tabelle eine Karte je Patient (Fahrzeug, Alarm-/
    Eintreffzeit, SK, M/W + Alter, Fachbereich/Diagnose grün bzw. rot, Kennzeichen S/H/N/B/R/BG
    als Plaketten, Anlass, Info, Bearbeiten/Löschen). Gelöschte bleiben durchgestrichen.
  - MANV-Sammelzuweisung: kompaktere Schrift und schmaleres PZC-Feld.
- Tablet/PC-Ansicht unverändert.

Version 4.64:
- Medizinische Qualifikation der Besatzung je Fahrzeug (Grundbesetzung). Standard:
  - RTW (Rettungsdienst und DRK): NFS + RS
  - KTW: RS + RH
  - NEF: NA + RS – ⚠️ nicht geprüft (Fahrer evtl. NFS), bitte bei Bedarf anpassen
  - RTH/ITH: NA + NFS (HEMS-TC); OrgL/LNA: LNA + OrgL
  - DLRG-Fahrzeuge: mind. 1× San B; übrige DRK-Fahrzeuge: mind. 1× San C
  - NKTW, KTH, Feuerwehr, THW, DGzRS: keine Grundbesetzung hinterlegt (nicht bekannt) –
    im Fahrzeug-Editor eintragbar.
  Im Fahrzeug-Editor frei änderbar (mit „+“ getrennt, Schnellknöpfe NA/NFS/RS/RH/San A–C).
- Sonder-Anmeldung der Besatzung (z. B. DLRG-MTW mit NFS an Bord):
  - am Fahrzeug-Terminal unter „🩺 Besatzung / Qualifikation“ → „Mit Status 1 anmelden“, oder
  - durch den Disponenten über den 🩺-Knopf in der Fahrzeugliste (setzt Status 1).
  Angemeldete Fahrzeuge zeigen „⭐ angemeldet: …“, bleiben in Status 1 (kein automatisches
  Zurück auf 2) und fallen bei Status 6 bzw. „Zurück zur Grundbesetzung“ wieder auf die
  Grundbesetzung zurück.
- Alarmierung: Ein angemeldetes Fahrzeug wird als qualifizierter Ersthelfer zum Anhaken
  angeboten (nie automatisch), wenn der Einsatz ein RTW (ab RS an Bord) bzw. NEF/RTH (Notarzt
  an Bord) vorsieht und es mind. 2 min schneller da ist und höchstens 15 min braucht.
  Abrollbehälter und reguläre RTW/NEF/RTH sind ausgenommen.
- Fahrzeug-Terminal: Schrift in der IVENA-Kurzübersicht war hellgrau auf weiß – jetzt lesbar.

Version 4.65:
- NEF-Grundbesetzung korrigiert: NA + NFS (vorher NA + RS mit „nicht geprüft“). Fahrzeuge mit
  eigener Eintragung im Editor bleiben unverändert.

Version 4.66:
- Neu: DLRG-Wachtürme Dangast „Pelikan Friesland 72/00-01“ und „72/00-02“ (Typ Wachturm,
  Standort Dangast, Grundbesetzung mind. 1× San B). Lage auf der Karte: Strand Dangast,
  ungefähr – genaue Turmstandorte sind nicht hinterlegt.
- „Nur zeitweise besetzt“: Die Türme stehen grundsätzlich auf Status 6. Zwischen 9 und 19 Uhr
  gehen sie hin und wieder zufällig für 30–120 min auf Status 1 (Pause dazwischen 1–4 h,
  ergibt grob 15 % der Tageszeit). Nach einem Einsatz gehen sie nicht auf 2, sondern
  später wieder auf 6. Im Einsatz (3/4/7/8) wird nichts automatisch geändert.
- Repo aufgeräumt: zwei versehentlich mit hochgeladene Test-Screenshots (q_term.png aus v4.64,
  aao_pat.png aus v4.25) entfernt.

Version 4.67:
- Wachtürme sind nicht alarmierbar: Sie erscheinen in keinem Fahrzeugvorschlag, keiner
  Nachforderung („Rettungsmittel bearbeiten“), keinem „Nächstes freies“ und keinem Vollalarm.
- Ausnahme First Responder: Ist ein Wachturm besetzt (Status 1) und liegt der Einsatzort
  höchstens 2 km entfernt, wird er bei jedem Einsatz unter „Optionale Fahrzeuge“ zum Anhaken
  angeboten (mit Entfernung und Besetzung). Im Einsatztext steht dann „First Responder (Wachturm)“.

Version 4.68:
- DLRG-Wachtürme Dangast: besetzt von 1,5 h vor bis 1,5 h nach Hochwasser (statt zufällig),
  nur tagsüber 09–19 Uhr (Nachthochwasser bleibt unbesetzt); sonst Status 6. In der
  Fahrzeugliste steht die (nächste) Hochwasserzeit.
- Hochwasserzeiten werden in der App aus einem vereinfachten Gezeitenmodell berechnet
  (Mond, Sonne, Mondentfernung), abgeglichen mit der BSH-Vorhersage für Wilhelmshaven
  12.–15.10.2026 (Abweichung dort ±10 min). Sonst etwa ±20–30 min; Wind/Sturmflut nicht
  berücksichtigt. Für Dangast ist kein eigener Zeitversatz zu Wilhelmshaven hinterlegt.

Version 4.69:
- Wachtürme nur in der Saison 01.06.–31.08. besetzt (±1,5 h um Hochwasser, tagsüber 09–19 Uhr),
  außerhalb immer Status 6.
- Neue Wachtürme, Rufnamen nach dem Schema von Dangast (Ortskennung/00-laufende Nummer):
  Schillig „Pelikan Friesland 76/00-01“, Horumersiel „76/00-02“, Hooksiel „76/00-03“,
  Wangerooge „78/00-01“. Strandwachen Schillig/Horumersiel/Hooksiel laut DLRG OG Wangerland
  (Jahresbericht 2016). Kartenlage je Strand nur ungefähr.
- Hochwasser für alle Türme nach Wilhelmshaven gerechnet – an Schillig/Hooksiel und besonders
  Wangerooge kommt es real früher; ein Versatz je Ort ist nicht hinterlegt.

Version 4.70:
- First-Responder-Zeitregel (gilt für NKTW als First Responder aus der AAO, besetzte Wachtürme und
  Fahrzeuge mit angemeldeter Besatzung ab RS): First Responder nur, wenn er schneller da ist als
  das erste andere Einsatzmittel des Einsatzes (egal welches) – bei Reanimation um mehr als 1 min,
  bei Verkehrsunfall um mehr als 2 min, sonst um mehr als 3 min. Vorher: schneller als das RTW
  (NKTW) bzw. mind. 2 min schneller als RTW/NEF (angemeldete Besatzung) bzw. nur Umkreis 2 km
  (Wachturm; der Umkreis bleibt zusätzlich bestehen).
- Wachtürme und angemeldete Besatzungen, die die Regel erfüllen, sind im Alarmvorschlag jetzt
  vorab angehakt (abwählbar). Die Zeitersparnis steht dabei.
- AAO-Bearbeitung: neue Einstellung „First Responder“ – Standard (Regel oben), Eigene
  Zeitersparnis (mehr als X min, 0 = sobald schneller) oder Nie. Bei mehreren passenden AAOs gilt
  die führende AAO.

Version 4.71:
- Wachturm-Standorte Dangast (Nutzerangabe): 72/00-01 am Badestrand bei den Toiletten (Lage
  ungefähr – Badestrand am DanGastQuellbad, genaue Toiletten-Koordinaten nicht gefunden),
  72/00-02 am Hafen Dangast (53,4463 N / 8,1081 O laut portmaps.com).
- Fahrzeug-Editor: neues Feld „📍 Eigener Standort (Breite, Länge)“, z. B. aus Google Maps
  kopiert. Leer = Standort der Wache bzw. des Orts. Gilt für Karte und Eintreffzeit.

Version 4.72:
- Wachtürme lassen sich jederzeit von Hand auf 1 (oder 6) setzen, auch außerhalb der Saison bzw.
  der Hochwasserzeiten. Die Automatik schaltet nur noch beim Beginn (→ 1) und Ende (→ 6) der
  Besetzungszeit um – wie bei den Dienstzeiten. Ein von Hand besetzter Turm bleibt also bis zum
  nächsten Ende einer Besetzungszeit bzw. bis er von Hand auf 6 gesetzt wird. In der Fahrzeugliste
  steht dann „jetzt manuell besetzt“. Endet die Besetzungszeit während eines Einsatzes, geht der
  Turm nach dem Einsatz auf 6.

Version 4.73:
- IVENA: 40 weitere Kliniken mit recherchierten Fachrichtungen (Stand 10/2026; Qualitätsberichte
  2024 im Deutschen Krankenhaus-Verzeichnis, Klinik-Websites, Zertifikate):
  - Ostfriesland: Ubbo-Emmius-Klinik Aurich, Klinikum Emden, Klinikum Leer, Borromäus Hospital
    Leer, Inselkrankenhaus Borkum
  - GOL-Gebiet (inkl. Delmenhorst, LK Oldenburg, LK Cloppenburg): Delme Klinikum Delmenhorst,
    Krankenhaus Johanneum Wildeshausen, Karl-Jaspers-Klinik, St. Josefs-Hospital Cloppenburg,
    St.-Marien-Hospital Friesoythe
  - Bremen/Bremerhaven: 9 Kliniken
  - Hamburg: 21 Kliniken (inkl. 2 Kinderkrankenhäuser und Psychiatrie Ochsenzoll)
- Regeln: Kardiologie nur mit Herzkatheterlabor oder DGK-CPU, Schockraum nur bei DGU-
  TraumaNetzwerk, Neurologie bei Neurologie oder Stroke Unit. Nicht Belegtes fehlt bewusst und
  steht in der Klinik-Notiz („nicht geprüft“); über 🏷️ ergänzbar.
- Nicht aufgenommen: St. Bernhard-Hospital Brake (geschlossen 14.08.2026), UEK Norden (seit 2023
  kein Akutkrankenhaus), Krankenhaus Groß-Sand (Notaufnahme 2025 geschlossen), Zentralklinik
  Georgsheil (noch nicht eröffnet).
- Kartenlage: für 11 Kliniken geprüft, für die übrigen nur Ortsmitte (ungefähr).

Version 4.74:
- IVENA-Versorgungsbereiche = zuständige Leitstellen (Quelle: Landtag Niedersachsen Drs. 19/6425,
  vdek Bremen): LST Friesland-Wilhelmshaven, KRLS Ostfriesland (Aurich, Leer, Wittmund),
  LST Emden, GOL Oldenburger Land (Oldenburg, Delmenhorst, LK Oldenburg, Ammerland, Wesermarsch,
  Cloppenburg), LST Bremen, IRLS Unterweser-Elbe (Bremerhaven), LST Hamburg. Bereichsfilter
  einmalig auf alle Bereiche gesetzt.
- Kartenlage aller Kliniken jetzt aus den OpenStreetMap-Kartenlinks der Klinikseiten
  (klinikbewertungen.de) statt Ortsmitte – auch für die bisherigen 9 Kliniken. Google Maps war
  von hier aus nicht erreichbar. Die Punkte liegen auf der Klinikadresse, nicht zwingend an der
  Notaufnahme.
- Szenario „Übung Bremen“: dieselbe Klinikliste wie Friesland/Wilhelmshaven. Die alten Bremer
  Einträge (u. a. Roland-Klinik, Paracelsus, AMEOS Dr. Heines ohne Notaufnahme) werden ersetzt,
  offene Zuweisungen auf die neuen Einträge umgehängt, selbst angelegte Kliniken bleiben.

Version 4.75:
- IVENA-Anmeldung (Leitstelle, Fahrzeug-Terminal, MANV): Eintreffzeit wird automatisch
  eingetragen = jetzt + Fahrzeit vom Fahrzeug (GPS bzw. Einsatzort) zur Zielklinik; mit
  Sonderrechten bei Dringlichkeit 1, sonst ohne. Aktualisiert sich bei Wechsel von Klinik,
  Fahrzeug oder PZC; von Hand geänderte Zeit bleibt stehen. MANV: Zeit des ersten gewählten
  Fahrzeugs zur Standard-Zielklinik.
- MANV: Feld „PZC für alle“ + Knopf „Gleicher PZC für alle“ (für alle angehakten Fahrzeuge,
  ist keins angehakt: für alle).
- IVENA-Übersicht: Knopf „✅ Alle KHs frei melden“ – löscht alle Abmeldungen, alle Kliniken grün.
- Zwangszuweisung: Ist die Zielklinik für die Fachrichtung des PZC abgemeldet (oder komplett
  rot), geht die Anmeldung nur mit Haken „Zwangszuweisung“ (Einzel, Bearbeiten, Terminal; MANV
  ein Haken für alle betroffenen Patienten). Zwangszuweisungen sind in der Zuweisungsliste mit
  „ZW“ (rot) markiert.

Version 4.76:
- IVENA-Zuweisungsliste: Der Fachbereich jeder Anmeldung bleibt in der Farbe, die bei der
  Anmeldung galt (rot = damals abgemeldet/Zwangszuweisung, grün = damals frei) – spätere
  Ab- oder Freimeldungen ändern die Farbe nicht mehr. Wird beim Bearbeiten Klinik oder
  Fachrichtung gewechselt, gilt der Stand dieser neuen Anmeldung. Ältere Anmeldungen (vor
  v4.75) ohne gespeicherten Stand zeigen weiter den aktuellen Stand.

Version 4.77:
- MANV „Gleicher PZC für alle“: übernimmt nur die ersten 3 Ziffern (RMI); Alter und Dringlichkeit
  werden je Patient dahinter getippt (schon getippte Ziffern bleiben stehen).
- „Rettungsmittel bearbeiten“: unten werden keine bereits alarmierten Fahrzeuge mehr angezeigt
  (diesem Einsatz zugeordnet oder im Einsatz: Status 3/4/7). Typen ohne verbleibende Fahrzeuge
  fallen weg.
- „Rettungsmittel bearbeiten“: grüner Knopf unten „✅ Jetzt alarmieren“ (vor der Alarmierung –
  alarmiert direkt wie „Jetzt alarmieren“) bzw. „✅ Fertig“ (bei bereits alarmiertem Einsatz).
  Der Alarm-Freitext bleibt dabei erhalten.
- Kreisalarm DLRG / Kreisalarm DRK: alarmiert alle freien Fahrzeuge der Organisation im ganzen
  Kreis (ohne Wachtürme, Insel-Regel gilt). Im Reiter DLRG bzw. DRK als Knopf neben „Vollalarm“
  (Vollalarm = nächste Ortsgruppe) und in der AAO als Fahrzeugtyp wählbar.

Version 4.78:
- FF Varel in ihre drei Ortsfeuerwehren aufgeteilt (Quelle: varel.de, bos-fahrzeuge.info,
  feuerwehr-varel.de, feuerwehrobenstrohe.de):
  - OF Obenstrohe (Wiefelsteder Straße 45): 12-45-3 LF, 12-24-3 TLF, 12-63-3 MZF,
    19-62-1 SW (KatS; nur bei bos-fahrzeuge gelistet), neu 12-78-3 RTB
  - OF Borgstede-Winkelsheide (Ziegelstraße 1a): 12-17-2 MTF, 12-43-2 LF, 12-24-2 TLF,
    neu 12-78-2 RTB (mit Lichtmast)
  - OF Varel: wie bisher, neu 12-19-1 MTF, 12-64-1 GW-L1, 12-78-1 RTB
  Standort-Koordinaten der beiden Ortswehren = Kartenmitte der bos-fahrzeuge-Wachenseiten.
  Eigene Änderungen an diesen Fahrzeugen bleiben unangetastet.

Version 4.79:
- Rettungsmittel-Übersicht: Bei Feuerwehr und Rettungsdienst ist jede Wache ein einklappbarer
  Reiter (Standard: eingeklappt) mit Anzahl Fahrzeuge und davon frei. Welche Wachen offen sind,
  merkt sich das Gerät. DLRG, DRK usw. bleiben wie bisher aufgeklappt.

Version 4.80:
- Alle Feuerwehren im LK Friesland geprüft und ergänzt (Quelle: bos-fahrzeuge.info, Websites der
  Wehren/Gemeinden, NWZ). 58 Fahrzeuge neu, jetzt 108 Feuerwehr-Fahrzeuge an 22 Standorten:
  - FF Jever: Jever (+11/19-01 MTW, 19/44-03 LF 20 KatS; FTZ: 19/63-01 MZF, 19/65-02 WLF),
    Ortswehr Cleverns (MTW, TLF, LF)
  - FF Zetel (neu): Zetel (ELW, MTF, TLF, LF 20, HLF 20, MZF), Ortswehr Neuenburg (MTF, LF 8, HLF 10)
  - FF Sande (neu): Sande (ELW, LF 20, HLF 20, GW 2, CBRN-ErkKW), Ortswehr Gödens (ELW, TLF, LF)
  - FF Schortens (neu): Schortens (ELW, MTW, TLF, LF, HLF, RW-Kran), Ortswehren Accum und
    Sillenstede
  - FF Wangerland: Hohenkirchen (+KdoW, MTW, TLF, HLF, SW, RTB), Ortswehren Hooksiel, Minsen,
    Neugarmssiel, Tettens, Waddewarden, Wiarden (neu)
  - FF Bockhorn: Ortswehr Grabstede (neu: MTW, LF 8, HLF 10)
  - FF Wangerooge: + 18/32-01 DLK 12/9
  Nicht aufgenommen: 16/41-06 TSF-W Waddewarden (durch LF 10 ersetzt), 16/45-07 LF Wiarden
  (nicht auf eigener Website), 19/44-02 LF KatS (bei zwei Wachen gelistet).
  Unsicher: Accum TLF 15/20-02 oder 15/22-02; Hohenkirchen SW 16/61-01 (bos: 19/61-01);
  Lage der Feuerwehrhäuser = Kartenmitte bos-fahrzeuge (Minsen/Wiarden/Tettens Adresse unklar).
- Rettungsmittel-Übersicht Feuerwehr: je Stadt/Gemeinde zuerst die Hauptwehr, darunter
  eingerückt ihre Ortswehren (Reihenfolge Jever, Varel, Zetel, Sande, Schortens, Wangerland,
  Bockhorn, Wangerooge).

Version 4.81:
- Fehler behoben (seit v4.78/v4.80): Ortswehren Obenstrohe und Borgstede-Winkelsheide zeigten
  nur die Boote, neue Feuerwehrfahrzeuge fehlten. Ursache: Der gemeinsame Live-Stand bzw. der
  dauerhaft gespeicherte Fahrzeugstand (älter) hat beim Verbinden die Korrekturen überschrieben
  (beim Laden gelten dort alle Fahrzeuge als „bearbeitet“). Jetzt werden Umzüge und neue
  Standardfahrzeuge auch nach dem Live-Abgleich und nach dem Laden eines gespeicherten Stands
  angewendet und wieder gespeichert. Fahrzeuge, die selbst an einen anderen Ort verlegt wurden,
  bleiben unangetastet.
- Auf Wunsch „wie es sein könnte“ ergänzt (nur bos-fahrzeuge, nicht bestätigt): 16/45-07 LF 10/6
  Wiarden, 19/44-02 LF 20 KatS in Hooksiel (bos listet es auch bei Minsen).

Version 4.82:
- Notruf nachträglich ändern („📝 Notruf ändern“ an jedem Einsatz in der Leitstellen-Übersicht und
  im Notruf): jeder beantwortete Abfragepunkt ist änderbar (Auswahl bzw. Textfeld). Danach wird
  das Stichwort neu bewertet.
  - Noch nicht alarmiert: zurück zu „Alarmierung vorbereiten“ mit neuem Vorschlag.
  - Bereits alarmiert: im selben Schritt „Rettungsmittel bearbeiten“ mit Hinweis (altes → neues
    Stichwort, geänderte Punkte) und den laut neuer Bewertung zusätzlich nötigen Mitteln zum
    Anhaken; Mittel entfernen/hinzufügen wie gewohnt. „📢 Alarm erneut senden“ alarmiert die
    angehakten Mittel und schickt den geänderten Alarm an alle Fahrzeuge des Einsatzes – die
    Fahrzeug-Terminals klingeln erneut („Alarm geändert“). „Ohne neuen Alarm“ behält die Änderung.
  - Änderungen und erneuter Alarm stehen im Einsatzverlauf.
- Abfragepunkt C: neue Antwort „Sonstiges“ (auch als AAO-Bedingung wählbar).

Version 4.83:
- Luftrettung: je Hubschrauber „Anzahl Piloten“ und „Rettungswinde ja/nein“ (Fahrzeug-Editor,
  Anzeige in der Fahrzeugliste). Standard: Christoph 26 mit Winde (laut ADAC seit 2003) und
  Northern 06 mit Winde (laut Fahrzeugdaten), Christoph 6, Lifeliner 4 und Christoph Niedersachsen
  ohne Winde (für Bremen nennt die DRF keine Winde; Lifeliner 4 nicht geprüft). Pilotenzahl je
  Einsatz ist nicht veröffentlicht – angenommen 2 bei Winde/Offshore, sonst 1.
- Einsätze auf dem Wasser: Nur Hubschrauber MIT Rettungswinde fliegen direkt zum Patienten; alle
  anderen fliegen – wie die Landfahrzeuge – zum Bereitstellungsraum (falls festgelegt).

Version 4.84:
- Wangerooge: Die Boote von DRK (Wasserwacht) und DLRG („Olli“) bleiben an der Insel – nur
  Einsätze auf der Insel oder auf dem Wasser rund um Wangerooge (bis 8 km von der Inselmitte).
  Das DGzRS-Seenotrettungsboot FRITZ THIEME fährt weiterhin zu allen Einsätzen auf dem Wasser.

Version 4.85:
- R0-Einsätze und Krankentransporte stapeln: In „Fahrzeuge bearbeiten“ gibt es bei R0/KT den
  Bereich „🔁 Stapeln“ mit RTW/NKTW/KTW, die gerade im Einsatz sind (Status 3/4/7). Ein gestapeltes
  Fahrzeug wird in dem Moment, in dem es Status 1 meldet (auch über das Fahrzeug-Terminal),
  automatisch zu diesem Einsatz alarmiert (Status 3). Aufheben jederzeit möglich; die Einsatzkarte
  zeigt „🔁 Gestapelt: …“.
- Warten: R0/KT-Einsätze lassen sich vor der Alarmierung zurückstellen („⏸ Warten“ in der
  Alarmierung und an der Einsatzkarte). Neben der Einsatznummer läuft dann ein roter, fetter
  Timer. Nach 2 Stunden wird der Einsatz mit Alarmton erneut vorgelegt („⏰ erneut vorgelegt“).
  „▶️ Weiter disponieren“ holt ihn zurück in die Alarmierung.
- DRK-Rettungswagen/-KTW (Hintergrunddienst) werden bei Rettungsdienst-Einsätzen und KTs nie mehr
  automatisch vorgeschlagen (auch nicht bei „Nächstes freies“), nur manuell im Reiter DRK.
- Umbenannt: „Rettungsmittel bearbeiten“ → „Fahrzeuge bearbeiten“, Reiter „Rettungsmittel“ →
  „Fahrzeuge“. Der bisherige Knopf „Fahrzeuge bearbeiten“ vor der Alarmierung heißt jetzt
  „Vorschlag bearbeiten“ (damit es keine zwei gleichen Knöpfe gibt).

Version 4.86:
- Übungsnotrufe (Generator): Oben in der Mitte gibt es jetzt 🔇/🔊 und „🎲 Übungsnotrufe AN/AUS“
  (Einstellung je Gerät). Bei AN kommen zufällig realistische Anrufe rein: mal einer, mal eine
  Pause, mal zwei kurz nacheinander, mal zwei gleichzeitig (danach 2,5–8 Minuten Ruhe, höchstens
  4 klingeln gleichzeitig). Sie erscheinen wie echte Anrufe oben als rote (112) bzw. blaue (19222)
  Leiste mit „Annehmen“ und laufen danach als ganz normaler Anruf mit Telefonat-Leiste und Abfrage.
- Rund 20 Fälle: Brustschmerz, Schlaganfall, Sturz, Atemnot, Unterzucker, Krampfanfall, allergische
  Reaktion am Strand, Fieberkind, psychischer Ausnahmezustand, Reanimation, hilflose Person,
  VU mit eingeklemmter Person, VU an der Kreuzung, Wohnungsbrand, Dachstuhlbrand, Containerbrand,
  Baum auf Straße, Schwimmer in Not, Segelboot in Seenot, KT-Einweisung und KT-Entlassung (19222).
- Orte: fiktive Hausnummern an echten Straßen im Landkreis Friesland bzw. echte Strände/Häfen.
  Der Handy-Standort des Anrufers kann wie beim Anrufer-Terminal mit „Standort übernehmen“
  als Einsatzort übernommen werden.
- 🔇 Textmodus: Über der Notrufabfrage erscheint ein Chat. Man tippt, was man sagen würde, der
  Anrufer antwortet. 🔊 Sprachmodus: Der Anrufer spricht (Sprachausgabe des Geräts), Fragen per
  🎤 (Spracherkennung, je nach Browser) oder per Tastatur. In beiden Modi sagt der Anrufer
  zwischendurch auch von selbst etwas (z. B. „Ich glaub, ich hör schon das Martinshorn!“).
- Wichtig: Der Anrufer ist keine KI. Er erkennt typische Fragen an Stichworten (wo, was ist
  passiert, ansprechbar, atmet, wie alt, Vorerkrankungen, eingeklemmt, Rauch, wohin, liegend …)
  und antwortet aus seinem Fall. Freie Gespräche versteht er nicht („Das hab ich nicht verstanden“).

Version 4.87:
- Übungsanrufe Sprachmodus: Das Mikrofon hört jetzt dauerhaft zu, solange ein Übungsanruf läuft.
  Man kann jederzeit einfach sprechen, auch dazwischen (der Anrufer verstummt dann). Alles wird
  weiter im Gesprächsprotokoll aufgezeichnet. Knopf „🎙️ an/aus“ zum Stummschalten. Die eigene
  Sprachausgabe des Anrufers wird möglichst herausgefiltert (Echo), ganz sicher klappt das nur mit
  Kopfhörer. Funktioniert nur in Browsern mit Spracherkennung (z. B. Chrome, Safari).
- Der Gesprächsverlauf steht jetzt unter der Notrufabfrage (über dem Abfrageverlauf).
- Anrufer rufen jetzt manchmal für sich selbst an (Ich-Form, z. B. Brustschmerz, Atemnot, Sturz,
  Wespenstich, Auffahrunfall, Schnittverletzung) und sonst für andere. Neuer Fall: Schnittverletzung.
- Folgeanrufe: Nach dem Auflegen ruft der Anrufer manchmal (ca. 40 %) nach 1–4 Minuten erneut an,
  weil es schlimmer wird oder sich etwas ändert (z. B. Brustschmerz → bewusstlos, Schwimmer
  untergegangen, Feuer greift über, KT verschoben). Die Leiste zeigt „Rufnummer bekannt aus Einsatz
  #…“. Mit „↩️ Zu Einsatz #… übernehmen“ läuft das Gespräch im alten Einsatz weiter und man kann
  dort direkt die Abfragepunkte ändern und neu alarmieren.
- 🤖 KI-Anrufer (optional, oben neben 🎲): Brücke zu Claude (Anthropic) mit eigenem API-Schlüssel.
  Dann antwortet der Anrufer frei auf alles, der Fall bleibt derselbe. Der Schlüssel bleibt nur auf
  dem Gerät. Kostet pro Antwort einen kleinen Betrag beim eigenen Anthropic-Konto. Bei Fehlern oder
  ohne Schlüssel antwortet er wie bisher nach Stichworten.
- 🫀 Reanimationsprotokoll (für alle Notrufe, simuliert oder echt): öffnet sich automatisch bei
  „Reanimation“ bzw. „Keine normale Atmung“, sonst über den Knopf „🫀 Reanimation“ im Notruf.
  Enthält die Telefonreanimations-Anleitung zum Abhaken (bei Übungsanrufen wird der Satz direkt an
  den Anrufer gesagt) und ein Metronom mit 120/min. Das Metronom läuft auch auf dem Handy des
  Anrufers (Anrufer-Terminal), mit Hinweis „Drücken Sie im Takt!“.
- Das Fenster bleibt nach der Alarmierung offen und schließt nur über „🚑 RTW angekommen“ oder
  „🚑 NEF angekommen“ – das jeweils alarmierte Fahrzeug geht dabei direkt auf Status 4. (Notfalls
  „ohne Eintreffen schließen“, mit Rückfrage.) Dauer, Metronom und Anleitung kommen in den Verlauf.
- Läuft ein Übungsgespräch weiter, während man woanders ist, erscheint es als kleines Fenster
  rechts (Tablet) bzw. unten (Handy) zum Weitersprechen. Auf dem Tablet rückt der Inhalt dafür
  nach links, damit nichts verdeckt wird.

Version 4.88:
- Notrufabfrage bearbeiten (Reiter AAO, unter der AAO-Liste), getrennt für Notruf 112 und
  Krankentransport: Fragetexte ändern (↺ = Standardtext), Reihenfolge mit ▲▼, Fragen mit 👁️
  ausblenden (werden dann als „nicht erhoben“ übersprungen) und eigene Fragen hinzufügen:
  kurzer/langer Text, Zahl, Ja/Nein/Unbekannt oder Auswahl mit eigenen Antwortknöpfen,
  wahlweise nur bei bestimmten Ereignissen (z. B. nur bei Feuer). Eigene Fragen stehen im
  Abfrageverlauf, lassen sich über „Notruf ändern“ nachträglich ändern und sind als
  AAO-Bedingung wählbar. Gespeichert wird zusammen mit den AAOs (alle Geräte).
- Grenzen: „Über welche Nummer“, „Wo genau“, „Was ist passiert“ und die KT-Art bleiben immer
  gefragt. Die Antwortknöpfe der Standardfragen sind fest, weil Stichwort und AAO darauf
  aufbauen. Fragen, die von „Was ist passiert?“ abhängen, können nicht davor geschoben werden.
- Übungsanrufe: Das Gespräch läuft weiter, bis man selbst auflegt. Der Anrufer legt nicht mehr
  von sich aus auf (wenn die Kräfte eintreffen, sagt er nur „Die sind da!“). Ausnahme: selten
  bricht die Verbindung ab (Funkloch) – dann ruft der Anrufer kurz darauf erneut an.
- Mit dem Patienten sprechen: „Können Sie mir den Patienten/die Patientin geben?“ – ist die
  Person wach genug, kommt sie ans Telefon und antwortet selbst (Ich-Form, im Sprachmodus mit
  passender Stimme). „Geben Sie mir wieder den Anrufer“ holt den Anrufer zurück. Bei
  Bewusstlosen, Kleinkindern oder Eingeklemmten erklärt der Anrufer, warum es nicht geht.

Version 4.89:
- XABCDE-Antworten bearbeitbar (AAO → Notrufabfrage bearbeiten → bei X, A, B, C, D, E
  „✏️ Antworten bearbeiten“): Antworttexte ändern, Reihenfolge ▲▼, löschen, neue hinzufügen,
  ↺ zurück auf Standard.
- Jede Antwort hat ein „zählt als“: die Standardbedeutung, auf die Stichwort, AAO und
  Reanimationsprotokoll reagieren. Beispiel: „Schnappatmung“ zählt als „Keine normale Atmung“
  → Reanimation wird wie bisher erkannt. Im Abfrageverlauf steht dann „Schnappatmung (= Keine
  normale Atmung)“.
- „Eigene Antwort“ wird genau so gespeichert, löst von sich aus kein Stichwort aus und ist
  in eigenen AAO-Bedingungen wählbar sowie unter „Notruf ändern“ auswählbar.
- Bei E (Freitext) sind die Antworten die Schnellknöpfe unter dem Textfeld.

Version 4.90:
- Eigene XABCDE-Antworten zählen jetzt als genau der Text, den man eingepflegt hat: Er steht so
  im Abfrageverlauf, im Alarmtext, in der Einsatzübersicht und unter „Notruf ändern“, und
  AAO-Bedingungen können direkt auf diesen Text gesetzt werden (z. B. B = „Röchelnd“).
- Die Auswahl „Stichwort-Logik wie …“ (vorher „zählt als“) sagt nur noch der eingebauten
  Stichwortlogik (RD_X…RD_D, Reanimation), wie sie die Antwort behandeln soll. Alte
  AAO-Bedingungen auf die Standardwerte greifen weiterhin.

Version 4.91:
- Übungsanrufe: Krankentransporte (19222) rufen nicht mehr automatisch an, es kommen nur noch
  Notrufe über 112.

Version 4.92:
- Notrufabfrage mit Masken: mehrere Fragen erscheinen zusammen auf einer Seite.
  • 👥 Betroffene: Anzahl Betroffene, eingeklemmt/eingeschlossen, durch Feuer/Rauch bedroht,
    verletzt/gefährdet
  • 🌊 Person im Wasser: im Wasser? und Zustand
  • 👤 Patient: Psy-Problem, Name, Alter, Geschlecht
  Es erscheinen nur die Felder, die zum Ereignis passen (z. B. „eingeklemmt“ nur bei VU/TH,
  „bedroht“ nur bei Feuer); der Rest wird wie bisher automatisch übersprungen. Ganz
  unpassende Masken (z. B. Wasser beim Brand) werden übersprungen. Name und Alter dürfen leer
  bleiben („unbekannt“), Geschlecht ohne Auswahl = „Unbekannt“.
- „Zurück“ nimmt immer die ganze Maske zurück. Umbenannte/ausgeblendete Fragen aus
  „Notrufabfrage bearbeiten“ gelten auch in den Masken.

Version 4.93:
- „Zurück“ in der Notrufabfrage löscht die Antworten nicht mehr einfach: Die vorherige Antwort
  bleibt vorbelegt (Knopf orange umrandet, Textfelder/Zahlen und Masken ausgefüllt, Hinweis
  „Deine vorherige Antwort ist markiert“). Man kann sie mit einem Tipp übernehmen oder neu
  beantworten. Das gilt auch, wenn man mehrere Schritte zurückgeht – beim erneuten Vorgehen
  sind alle früheren Antworten wieder vorbelegt. Erst die neue Antwort zählt.

Version 4.94:
- Anfrage Nachbarlandkreis jetzt an die Ankunftszeit gekoppelt: Der rote Knopf „bei GOL /
  LST Ostfriesland anfragen“ erscheint, wenn ein freies Nachbar-RTW/NEF schneller am
  Einsatzort wäre als unser schnellstes freies eigenes RTW/NEF (oder wir keins frei haben) –
  nicht mehr nach reiner Entfernung (20 km). Der Knopf zeigt beide Zeiten. Nicht bei R0/KT.
  DRK-Hintergrund zählt dabei nicht als eigenes Fahrzeug.
- Die Fahrzeugauswahl beim Nachbarlandkreis ist nach Ankunftszeit sortiert und zeigt je
  Fahrzeug „~X min“ und ob es schneller als unser eigenes ist.
- Übungsanrufe: Bei Unfällen und Bränden gibt es jetzt auch mehrere Betroffene:
  Unfall gegen Baum 1–4 Insassen (manchmal 2 eingeklemmt), Kreuzungsunfall 2–4 Verletzte,
  Wohnungsbrand 1–3 Personen im Gebäude, neu: Unfall Kleinbus/Auto mit 5–8 Verletzten.

Version 4.95:
- „Psy Problem?“ ist optional: In der Patienten-Maske kann man es leer lassen (wird als
  „nicht erhoben“ gespeichert). Name, Alter und Geschlecht sind dort ebenfalls als optional
  gekennzeichnet.

Version 4.96:
- Die Frage „Bestehen weitere Gefahren am Einsatzort?“ ist keine eigene Frage mehr, sondern ein
  kleines Kästchen unter dem Freitext („⚠️ Weitere Gefahren am Einsatzort … – Ja“). Angehakt =
  „ja“, nicht angehakt = „nein“. Die Frage steht deshalb immer direkt beim Freitext.

Version 4.97:
- Mehrere Plätze gleichzeitig: Jeder Platz (Hauptplatz und jeder Monitor) hat jetzt seinen
  EIGENEN offenen Notruf. Mehrere Disponenten können also gleichzeitig verschiedene Notrufe
  abfragen, ohne sich gegenseitig zu stören. Die anderen Plätze sehen den Notruf trotzdem live
  in der Einsatzliste, mit dem Hinweis „🎧 offen an …“. Öffnet ein zweiter Platz denselben
  Einsatz, bearbeiten beide ihn gemeinsam (Änderungen kommen live an). Wird ein Einsatz an
  einem Platz abgeschlossen, verschwindet er überall.
- Platzname oben neben „● Live“ (🎧 …), antippen zum Umbenennen (z. B. „Platz 1“).
- Anrufe vom Anrufer-Handy klingeln an allen Plätzen; wer zuerst annimmt, hat ihn – an den
  anderen Plätzen kommt dann „bereits an einem anderen Platz angenommen“. Mit dem neuen
  📞-Knopf oben kann jeder Platz diese Anrufe für sich ausblenden (📞✕).
- Übungsnotrufe (🎲), 🔇/🔊 und 🤖 gibt es jetzt auch auf den Monitoren, je Platz einstellbar.
  Ein Übungsanruf gehört dem Platz, der ihn angenommen hat (nur dort spricht der Anrufer).
- Die Telefonat-Leiste oben zeigt nur die eigenen Gespräche.
- Wichtig: Nach dem Update alle Geräte (Hauptplatz und Monitore) einmal neu laden.

Version 4.98:
- Einsatzkarte zeigt jetzt alle Notfallorte der offenen Einsätze als Marker (📞 orange = in
  Abfrage, 🚨 rot = alarmiert, blauer Rand = der eigene offene Notruf). Antippen zeigt Stichwort,
  Ort und ggf. „offen an …“ mit „Einsatz öffnen“. Rechts eine Liste aller Notfallorte
  (antippen = auf der Karte hinspringen); Einsätze ohne Ort stehen darunter.
- Über die Karte kann kein Einsatzort mehr übernommen werden (kein Setzen per Antippen, kein
  „In Einsatz übernehmen“, kein „Aktueller Standort“). Der Ort wird nur noch in der
  Notrufabfrage festgelegt. Die Suche auf der Karte springt nur noch hin (graues Suchergebnis).
  Bereitstellungsort per Karte wählen geht weiterhin.

Version 4.99:
- KI-Anrufer ausgebaut (🤖 oben, eigener Anthropic-Schlüssel nötig):
  • Die KI erfindet die Übungsfälle jetzt selbst – jedes Mal neu und abwechslungsreich (Thema
    und Ort an echten Straßen gibt die App vor, Antworten werden auf die Abfragewerte geprüft).
    Zwei Fälle werden im Hintergrund vorbereitet, damit beim Klingeln nichts wartet.
  • Spontane Sätze zwischendurch kommen ebenfalls von der KI, passend zum Gesprächsverlauf.
  • Natürlicheres Gesprächsverhalten: gibt Infos stückweise, fragt nach, braucht mal „Moment …“,
    wird ruhiger, wenn man beruhigt. Folgeanrufe gibt es auch bei KI-Fällen.
  • Standardmodell jetzt Claude Sonnet 5.5 (natürlichere Gespräche), Haiku 4.5 wählbar.
  • Kurze Anleitung zum Schlüssel im 🤖-Fenster; im Gespräch ohne KI ein Link „echte KI einrichten“.
- Ohne Schlüssel läuft alles weiter wie bisher (Stichwort-Anrufer mit festen Fällen).

Version 5.00:
- Neu: „Übungsanrufer 112“ als eigene Seite in Claude (Link im 🤖-Fenster). Dort spielt Claude den
  Anrufer – ohne API-Schlüssel, über das eigene Claude-Konto: erfundene Fälle (Thema wählbar oder
  Zufall, Orte an echten Straßen in Friesland), freies Gespräch, Schnellfragen, Vorlesen, Auflegen,
  „Anrufer ruft erneut an“ und eine Auswertung der eigenen Abfrage durch Claude. Die Abfrage und
  Alarmierung macht man parallel in der Leitstelle; der Handy-Standort steht zum Kopieren bereit.
  Grenze: Die Seite ist nicht automatisch mit der Leitstelle verbunden und kann kein Mikrofon nutzen.

Version 5.01:
- 📝 Eigenen Notruf vorbereiten (oben neben 🤖): Ausbilder legt den Fall mit Parametern fest –
  Ereignis, Adresse (oder Strand/Hafen), Schilderung, erster Satz, Anrufer (selbst/Angehöriger/
  Passant, Stimmung, Name), Patient (Alter, Geschlecht, Name), Betroffene/eingeklemmt/bedroht,
  X/A/B/C/D, Psy, Beschwerden, Vorerkrankungen, Gefahren, Sätze zwischendurch und Hinweise nur für
  die KI. Klingeln: sofort, in X Minuten oder zufällig innerhalb von X Minuten (geheim), an diesem
  oder einem anderen Platz der Sitzung. Der Anrufer spielt genau diesen Fall (mit 🤖 KI frei, sonst
  nach Stichworten). Geplante Notrufe lassen sich im selben Fenster wieder löschen.
- IVENA: Bei einem alarmierten MANV (mehr als 3 Betroffene) steht oben in IVENA (Übungsansicht,
  Zuweisungen, Anmeldung, MANV-Zuweisung) wie im echten IVENA der rote Hinweis „MANV-Aktiver Einsatz:
  Es ist ab sofort mit Zuweisungen zu rechnen …“ mit Uhrzeit, MANV-Stufe (10/25/50/100 nach
  Betroffenenzahl), Stichwort, Ort und Art (z. B. Traumatologisch) sowie „Information MANV Einsatz“.
- Übungsanrufer 112 (Seite in Claude): neu „✍️ Eigenen Fall vorgeben“ – Fall in Stichworten
  beschreiben, Claude spielt ihn.

Version 5.02:
- Anrufer-Engine 2 (ohne KI-Schlüssel, kostenlos, läuft komplett im Gerät): versteht Tippfehler
  („pasiert“, „ansprechbr“), mehrere Fragen in einem Satz („Ist er ansprechbar und atmet er
  normal?“), Rückfragen („wie bitte?“ → wiederholt), Bestätigungen („okay“ → sagt etwas Neues),
  Ja/Nein-Fragen zu Details des Falls („Hat er Schmerzen im Arm?“ → schaut im Fall nach),
  Anweisungen („Legen Sie ihn hin“ → „Okay, mach ich“), „Schauen Sie mal nach …“ („Moment, ich
  guck …“). Wiederholt sich nicht wörtlich, Stockwerk/Hausbeschreibung bleibt im Gespräch gleich,
  wird ruhiger, wenn man beruhigt. Unbekannte Fragen beantwortet er menschlich („Das weiß ich
  nicht genau“) statt mit einem Standardsatz.
- Ehrlich: Das ist keine echte KI, sondern ein deutlich schlauerer Regel-Anrufer. Völlig freie
  Gespräche gibt es nur mit 🤖 (eigener Schlüssel) oder auf der Seite „Übungsanrufer 112“ in Claude.

Version 5.03:
- Anrufer noch schlauer: Zu jedem Anruf gibt es jetzt ein festes, stimmiges „Fallwissen“, aus dem
  er auch unerwartete Detailfragen beantwortet und sich dabei nicht widerspricht: Augen auf?,
  kann sprechen/sich bewegen?, wo liegt er (passend zur Schilderung, z. B. Küche), sind Sie bei
  ihm?, Tür offen?, erbrochen?, Fieber?, Alkohol?, Blutverdünner?, Allergien?, Diabetes?,
  schwanger?, Gewicht, gestürzt/Kopf angeschlagen?, Lippen blau?, Puls, Haustiere, wann zuletzt
  normal gesehen, „wie geht es ihm jetzt?“.
- Schlaganfall-Test (FAST): „Bitten Sie ihn zu lächeln“, „beide Arme heben“, „Satz nachsprechen“
  → passende Befunde beim Schlaganfall, sonst unauffällig.
- Adresse mit festem Stockwerk, Klingelschild (Nachname) und Hausbeschreibung; „Wie schreibt man
  das?“ → buchstabiert. Angehörige (Mann/Frau/Vater/Mutter/Kind) tragen denselben Nachnamen.
- Aufgeregte Anrufer werden ungeduldig, wenn lange gefragt und noch nicht alarmiert wurde
  („Warum fragen Sie so viel? Schicken Sie doch endlich jemanden!“).

Version 5.04:
- Anrufer versteht mehr Drumherum und Kontext:
  • Kurze Nachfragen beziehen sich aufs letzte Thema: nach Schmerz „Wo genau?“, „Wie stark?“,
    „Strahlt das aus?“; nach Atmung „Wie schnell?“, „Pfeift das?“; nach Blutung „Wo?“, „Wie stark?“;
    nach Brand „Wo genau?“; nach eingeklemmt „Wer genau?“.
  • Fragen zum Umfeld (je Anruf fest): Wetter, Licht, Aufzug/Treppe, Parken/Zufahrt, Orientierung
    („was ist gegenüber?“), Fahrtrichtung, beteiligte Fahrzeuge, Kennzeichen, Verkehr/Straße
    blockiert, läuft etwas aus, Strömung/Ebbe-Flut, Kleidung im Wasser, wo zuletzt gesehen,
    Rettungsschwimmer, Rauchfarbe, Flammen, Gas, Nachbarn, Kinder im Haus.
  • Fragen an den Anrufer selbst: verletzt?, was machen Sie gerade?, schon erste Hilfe?, wer ist
    noch da?, Polizei/Hausarzt informiert?, wo stehen Sie?, Akku, „Hören Sie mich?“, Sirenen
    schon zu hören?, lebt er allein?, „Was sehen Sie?“, „Haben Sie noch Fragen?“.
- E in der Notarzt-Abfrage wird beachtet: Findet sich im E-Freitext ein Notarzt-Stichwort
  (u. a. Verbrennung/Verbrühung, Stromunfall, Vergiftung, Unterkühlung, Beinahe-Ertrinken, Sturz
  aus Höhe/Polytrauma, Amputation, Stich/Schuss/Pfählung, Geburt/Schwangerschaftskomplikation,
  Anaphylaxie, Brustschmerz/ACS, stärkste Schmerzen, schweres SHT), wird ein NEF (und ggf. RTW)
  mit alarmiert, Stichwortzusatz „RD_E – … (NA-Indikation)“; kein R0-Herabstufen mehr. Eigene
  E-Schnellknöpfe lassen sich im Abfrage-Editor mit „🚑 NA-Indikation“ markieren.
- Eingehende Anrufe (Übungsanrufe und Anrufer-Handy) stehen nach Anrufzeit sortiert untereinander
  – der am längsten wartende oben, mit Nummer und Uhrzeit.

Version 5.05:
- E in der Notrufabfrage: Die Knöpfe unter dem Freitext sind jetzt zum Antippen (mehrere
  möglich, blau = gewählt) und werden zusammen mit dem Freitext übernommen, z. B.
  „Unterkühlt; Schürfwunde am Knie“. „Zurück“ stellt Knöpfe und Text wieder her.
- AAO: Bei der Bedingung „E – weitere Befunde“ stehen die E-Knöpfe zur Auswahl (antippen oder
  Text eingeben). Die Bedingung greift, wenn der Knopf gewählt wurde oder der Text vorkommt
  („a, b“ = a ODER b). Mit „🚑 NA-Indikation“ markierte Knöpfe ziehen weiterhin einen Notarzt.
- Nur „Unauffällig“ (ohne weitere Befunde) zählt weiter als unauffälliges E (R0 möglich).

Version 5.88:
- Fahrzeug-Handy: Die alarmierten Mittel stehen nicht mehr in der Alarmmeldung, weder in der Funkansicht noch im Navi-Meldungsfenster.
- Fahrzeug-Handy: Die „IVENA – Kurzübersicht“ ist einklappbar und startet eingeklappt. In der Zeile steht die Zahl der Kliniken und wie viele davon eine Abmeldung haben. Der Zustand bleibt beim Aktualisieren erhalten.

Version 5.87:
- Neue, seltenere Übungsnotrufe für die übrigen Fachrichtungen. Zusammen sind das ca. 6 % aller Anrufe, ein einzelner Fall ist also deutlich seltener als ein Herz- oder Sturzfall:
  - Geburtshilfe: einsetzende Geburt (39. SSW, Blasensprung, Pressdrang), Geburt zu Hause schon erfolgt, Blutung in der 30.–35. SSW
  - Gynäkologie: Unterbauchschmerzen mit Blutung
  - Pädiatrie: Pseudokrupp, Fieberkrampf
  - Urologie: Nierenkolik, akuter Harnverhalt
  - Augenheilkunde: akutes rotes, schmerzhaftes Auge mit Sehverschlechterung
  - HNO: Nachblutung nach Mandel-OP
- Die Besatzungen erkennen diese Fälle und melden mit dem passenden PZC in IVENA an, z. B. 536 einsetzende Geburt, 512 Pseudokrupp, 711 Nierenkolik, 721 akute Augenerkrankung, 732 HNO-Nachblutung. Angefahren werden nur Kliniken mit der passenden Fachrichtung.
- „Realistisch“ und die IVENA-Vorgeschichte enthalten diese Fälle jetzt auch, in kleinerem Anteil.

Version 5.86:
- Neue Ansicht zum Bearbeiten der Fachrichtungen einer Klinik: große Kacheln zum Antippen (grün mit Haken = vorhanden, mit Kürzel wie in der IVENA-Tabelle), Anzahl oben rechts, „Alle wählen“ und „Keine“, Speichern und Abbrechen.
- Die Ansicht bleibt in der normalen Seite mit der rechten Leiste und geht beim automatischen Neuzeichnen nicht verloren.

Version 5.85:
- Fehler behoben (seit 5.79): Die WHV-AAOs ließen sich über „✏️ Bearbeiten“ und „Löschen“ nicht öffnen. Der Knopf hat wegen der neuen AAO-Kennung („whv-…“) nichts gemacht. Das betraf alle WHV-AAOs, auch die Wasserrettung.
- Wird eine WHV-AAO gelöscht, alarmiert sie wie bei Friesland nichts mehr. Bisher wäre stattdessen die Friesland-Fassung (mit DLRG) genommen worden.

Version 5.84:
- IVENA-Fachrichtungen jeder Klinik lassen sich jetzt leichter bearbeiten:
  - IVENA-Übersicht: auf den Kliniknamen tippen
  - IVENA-Zuweisungen: unter der Klinikauswahl stehen ihre Fachrichtungen mit dem Knopf „🏷️ Fachrichtungen bearbeiten“
- Angefahren werden nur noch Kliniken, die die Fachrichtung haben:
  - Besatzungen wählen nur Kliniken mit der passenden Fachrichtung. Sind alle diese Kliniken abgemeldet oder rot, gibt es eine Zwangszuweisung in die nächste davon, nicht mehr in eine Klinik ohne die Fachrichtung.
  - Bei der Zuweisung von Hand (Leitstelle und Fahrzeug-Handy) sind Kliniken ohne die Fachrichtung des PZC ausgegraut („– ohne …“) und lassen sich nicht wählen.
  - Auch die IVENA-Vorgeschichte aus „Realistisch“ nutzt nur passende Kliniken.
- IVENA-Zuweisungen: Die Tabelle ist kompakter und passt jetzt auf die Bildschirmbreite.

Version 5.83:
- Fehler behoben (seit 5.79): Im AAO-Editor war die Fahrzeugzeile durch das neue Häkchen „nur BF WHV“ zu voll. Auf Handy und iPad ließen sich Fahrzeugtyp und Organisation kaum noch eingeben. Die Zeile bricht jetzt sauber um.
- Fehler behoben: Auf schmaleren Bildschirmen (z. B. iPad hochkant) war die AAO-Seite breiter als der Bildschirm. Breite Tabellen scrollen jetzt in sich.
- Fehler behoben: In der Kopfzeile überlappten auf manchen Breiten der Bereichsumschalter und die Übungsnotruf-Knöpfe.
- WHV: 01/58-01 (GW-W) der BF ist jetzt Typ „GW Wasserrettung“ statt „GW“ mit fest eingetragenem Fahrzeug. In den WHV-Wasser-AAOs steht dadurch ganz normal „GW Wasserrettung (Feuerwehr, nur BF WHV)“ und „RTB (Feuerwehr, nur BF WHV)“. Bestehende Stände werden automatisch umgestellt.

Version 5.82:
- Neue Symbole in der rechten Leiste: 🏠 Leitstelle, 🗺️ Karte, 🚑 Fahrzeuge, AAO, 🏥 IVENA, 📨 IVENA-Zuweisungen, 🤝 Nachbar-LKs, 📻 Funkrufgruppen, 👥 MANV, 🎪 Großveranstaltung.

Version 5.81:
- „🎲 Realistisch“ (Fahrzeuge) spielt jetzt die letzten 3 Stunden im Zeitraffer durch:
  - Einsätze in Friesland und Wilhelmshaven werden zu ihrer Zeit angelegt und alarmiert. Die Besatzungen arbeiten wie immer: Anfahrt, Versorgung, IVENA-Anmeldung, Transport, Übergabe.
  - Einsätze, die danach noch laufen, stehen ganz normal auf dem Startbildschirm und lassen sich weiter bearbeiten. Fertige Einsätze stehen in den Protokollen.
  - Die SDS aus dem Zeitraffer gelten als gelesen.
  - Deine eigenen offenen Einsätze bleiben unverändert.
- IVENA bekommt dazu Anmeldungen der letzten 14 Stunden für die Kliniken in Friesland/WHV, GOL und Ostfriesland. Sie kommen von eigenen Fahrzeugen und aus den Nachbar-LKs (nur Fahrzeuge bis ca. 45 km von der Klinik). In der Spalte „LST“ steht die jeweilige Leitstelle. Einige Fahrzeuge sind noch auf der Anfahrt.
  Mengen und Uhrzeiten sind Annahmen: tagsüber ca. 0,5–1 Anmeldung je Stunde und Klinik, nachts weniger.
- Rechte Leiste neu gestaltet: helle Kacheln ohne Lücken dazwischen, die aktive ist rot. Die Kachel „📞 Notruf“ ist weg (Notrufe nimmst du über „Notruf annehmen“ an bzw. öffnest sie über die Einsatzliste).
- Neu: Kachel „🎪 Großveranstaltung“ mit eigener Seite. Auf dem Startbildschirm steht nur noch ein kurzer Hinweis, solange eine Veranstaltung läuft.
- Startbildschirm rechts: kompakte Kennzahlen (offene Einsätze, davon alarmiert, Fahrzeuge im Einsatz) und „SDS schreiben“.

Version 5.80:
- Ein Platz disponiert jetzt entweder Friesland oder Wilhelmshaven. „Beide“ gibt es nicht mehr, Standard ist Friesland.
- Die Wahl gilt je Fenster. Ein zweiter Bildschirm, ein zweites Fenster oder ein zweites Gerät kann so den anderen Bereich disponieren.
- Alle Feuerwehr- und Rettungsdienst-Fahrzeuge des anderen Bereichs werden wie Fahrzeuge aus Nachbar-LKs behandelt, nur ohne Anruf. Sie kommen in den Vorschlag, wenn sie schneller da sind als das eigene Fahrzeug oder wenn im eigenen Bereich keines frei ist. Im Vorschlag steht dann „(aus WHV)“ bzw. „(aus Friesland)“. Das ersetzt die 5-Minuten-Regel aus 5.77.
- Einsätze im anderen Bereich bekommen in der Liste den Hinweis „📍 … – anderer Platz“.

Version 5.79:
- Eigene, unabhängige AAOs für Wilhelmshaven. Zu jeder Standard-AAO gibt es eine WHV-Fassung („WHV – …“), die sich einzeln ändern lässt. Bei Einsätzen in Wilhelmshaven gilt die WHV-Fassung.
- Auf der AAO-Seite schaltet man oben zwischen Friesland und Wilhelmshaven um. Eigene AAOs lassen sich auf „nur Friesland“, „nur Wilhelmshaven“ oder beide stellen.
- Die WHV-Wasser-AAOs haben statt der DLRG die BF: Rettungsboot, GW-W 01/58-01 als festes Fahrzeug, HLF und ELW mit „nur BF WHV“. Das war in 5.78 fest programmiert und steht jetzt in der AAO, also änderbar.
- Neu im AAO-Editor: Häkchen „nur BF WHV“ je Fahrzeugzeile.
- Neue Kopfzeile: Logo und Version links, Übungsnotruf-Steuerung in der Mitte, Bereichsumschalter und Knöpfe rechts. Auf schmalen Bildschirmen nur Symbole.

Version 5.78:
- Wasser-Einsätze in Wilhelmshaven (Person im Wasser oder Einsatzort auf dem Wasser) alarmieren nur noch die Berufsfeuerwehr, keine DLRG mehr:
  - statt DLRG-Boot das Rettungsboot der BF (01/78-01, sonst 02/78-01)
  - statt DLRG-GW Wasserrettung den GW-W der BF (01/58-01)
  - Drohne, Taucher und MTW der DLRG entfallen
  - auch HLF und ELW kommen nur von der BF
- Rettungsdienst und Hubschrauber bleiben wie in der AAO. In Friesland bleibt alles wie bisher.

Version 5.77:
- Neue hafentypische Einsätze in Wilhelmshaven. Sie kommen nur, wenn Wilhelmshaven mit disponiert wird:
  - Person im Hafenbecken am Bontekai
  - Arbeitsunfall am Container Terminal (JadeWeserPort), Lascher zwischen Containern eingeklemmt
  - Seemann mit Brustschmerz an Bord eines Containerschiffs (steile Gangway)
  - Brand im Maschinenraum eines Schiffes am Bontekai
  - Gefahrstoffaustritt aus einem Tankcontainer (Klasse 8, UN 1789), 2 Betroffene
  Die Orte sind echt, die Positionen ungefähr. Neu ist auch der Badeort „Südstrand Wilhelmshaven“.
- Wasser-Einsätze richten sich jetzt auch nach dem gewählten Bereich.
- Rettungsdienst über die Bereichsgrenze: Bei „nur WHV“ bzw. „nur Friesland“ schlägt der Vorschlag Rettungsmittel des anderen Bereichs ohne Telefonabsprache mit vor (gleiche Leitstelle). Das passiert, wenn im eigenen Bereich keines dieses Typs frei ist oder mehr gebraucht werden, oder wenn es mindestens 5 Minuten schneller da ist. Im Vorschlag steht dann „(aus Friesland)“ bzw. „(aus WHV)“. Die Feuerwehr bleibt getrennt.

Version 5.76:
- Abrollbehälter Wilhelmshaven laut BOS-Fahrzeuge ergänzt:
  - FuRW 1: 01/AB-SEGS und 01/AB-U.
  - OF Rüstringen: 20/AB-Mulde, 20/AB-Ölwehr, 20/AB-Rett, 20/AB-Schlauch und 20/AB-TWS (Tank-Wasser-Schaum).
  - Der AB-Dekon in Bant-Heppens war schon drin.
- Unsicher: Dass AB-U der „AB-Umweltschutz“ und AB-SEGS der „AB-Schiffsbrandbekämpfung“ von der Wachenseite ist, ist nur vermutet.

Version 5.75:
- Neu oben in der Kopfzeile: Auswahl „Friesland + WHV“, „nur Friesland“ oder „nur Wilhelmshaven“ (nur im Szenario Friesland/WHV). Die Einstellung gilt pro Gerät.
  - Übungsanrufe kommen nur aus dem gewählten Bereich. Wasser-Einsätze kommen immer.
  - Einsatzorte im anderen Bereich gelten als „außerhalb der Zuständigkeit“ (Weiterverbinden).
  - Automatische Vorschläge (AAO, nächstes Fahrzeug) nehmen nur Feuerwehr- und Rettungsdienst-Fahrzeuge des gewählten Bereichs. Von Hand bleiben alle alarmierbar.
- Wilhelmshaven: 46 Feuerwehrfahrzeuge (BF FuRW 1 und 2, FF Bant-Heppens, Rüstringen, Sengwarden, Fedderwarden) und 3 weitere Rettungsmittel (BF 02/83-02, Johanniter RTW 50/83-01 und KTW 50/92-01) laut BOS-Fahrzeuge. Nicht übernommen: Reserve, a.D., Anhänger, Abrollbehälter ohne Funkrufnamen, Aus-/Fortbildungsfahrzeuge, Landesfahrzeuge.
- Unsicher: Für FF Bant-Heppens ist keine Adresse angegeben, die Position ist ungefähr. Bei „Florian Wilhelmshaven 11/44-01“ (Fedderwarden) fehlt der Fahrzeugtyp. LF ist aus der Kennung angenommen.
- Fahrzeugliste: Unter Rettungsdienst stehen jetzt alle Rettungsmittel der Nachbar-LKs, je Kreis und Wache einklappbar, mit Status-Knöpfen und Terminal-Link.
- Nachbar-LKs geprüft und ergänzt: Ahlhorn (Akkon Oldenburg-Land 51/83-01 RTW, 51/92-01 KTW), Sandkrug (Johannes Oldenburg-Land 62/83-01, 62/83-02 RTW, 62/93-01 NKTW), Nordenham (NEF Rettung Wesermarsch 84/82-01), Weener (Rotkreuz Leer 45/83-01 und 45/83-02). Vorhandene Einträge (auch SRTW, NAW, Baby-NAW) bleiben unverändert. Insel-RTW (Langeoog, Spiekeroog) sind nicht übernommen.

Version 5.74:
- Fahrzeuge: Neuer Knopf „📤 Als Datei“. Er speichert die Fahrzeugliste als Datei oder öffnet auf iPhone/iPad das Teilen-Menü. Damit können eigene Änderungen fest in die Standarddaten übernommen werden.
- Fehler behoben (seit 5.67): Wurde ein älterer gespeicherter Stand (Cloud oder Datei) geladen, konnten wieder „OrgL/LNA“-Einträge auftauchen und OrgL Varel/Sande doppelt erscheinen. Die Umstellung läuft jetzt auch nach jedem Laden. Eigene Angaben wie Standort oder Besatzung bleiben dabei erhalten.

Version 5.73:
- LNA mit Handy: Hat das Handy GPS (höchstens 2 Minuten alt), rechnet die SDS die Ankunftszeit vom echten Standort aus. Der Ort in „komme aus …“ ist dann der echte nächstgelegene Ort.
- Hat das Handy kein GPS, wartet die SDS bis zu 5 Minuten darauf. Danach kommt „Eintreffzeit noch unklar (kein GPS)“.
- Auf der Leitstellenkarte bleibt der LNA weiterhin unsichtbar.

Version 5.72:
- LNA: 1–3 Minuten nach der Alarmierung schickt der LNA eine SDS, z. B. „Alarm erhalten, komme mit dem Privat-PKW aus Jever. Eintreffen in ca. 25 min (ca. 10:40 Uhr).“ Die genannte Zeit ist die, zu der er in der Simulation tatsächlich eintrifft.

Version 5.71:
- Fahrzeug-Handy: Bei Status 4 schließt sich das Navi und die Funkansicht erscheint. Bei Status 7 öffnet sich das Navi und führt über die Straßenroute zur Klinik aus der IVENA-Zuweisung. Das gilt egal, ob der Status am Handy gedrückt oder von der Leitstelle gesetzt wird.
- MANV/MANI/MANB: In der Funkansicht gibt es eine Karte „📢 Rückmeldung“ mit zwei Knöpfen:
  - „Erste Lagemeldung“: geschätzte Betroffene, was passiert ist, Gefahren, was zusätzlich gebraucht wird.
  - „Rückmeldung Betroffene (detailliert)“: Anzahl je Sichtungskategorie, davon eingeklemmt, bei MANI/MANB zusätzlich Unverletzte/Betreuung, Bemerkung. Vorausgefüllt mit den eigenen Sichtungskarten.
  - Die Leitstelle bekommt beides als SDS, im Einsatzverlauf und im MANV-Kasten. Die simulierte Sichtung läuft unabhängig davon weiter.
- Navi: Neuer Knopf „🧭 Ohne Route“. Dann wird keine Straßenroute berechnet. Ein Pfeil zeigt zum Ziel, dazu die Entfernung in Luftlinie und die Himmelsrichtung. Ohne Ziel folgt die Karte nur dem Fahrzeug. Das gleiche Bild erscheint, wenn keine Straßenroute geladen werden kann.
- Fehler behoben (seit 5.64): Das Navi-Ziel „Wache“ lag bei Fahrzeugen mit eigenem Wachen-Standort bei Koordinate 0,0.

Version 5.70:
- Navi (Bodenfahrzeuge): Unter der Karte gibt es ein Meldungsfenster. Es zeigt Stichwort, Einsatzort, Bereitstellungsraum, Meldetext, die letzte Nachforderung, die alarmierten Mittel und die SDS der letzten Stunde (höchstens 2).
- Das Fenster nimmt etwa ein Fünftel bis ein knappes Drittel der Bildschirmhöhe ein und lässt sich bei langem Text scrollen. Die Karte ist dafür entsprechend kleiner.

Version 5.69:
- „Rettungsmittel hinzufügen“: Feuerwehr-Fahrzeugtypen stehen jetzt zusätzlich ausgeschrieben da, z. B. „HLF – Hilfeleistungslöschgruppenfahrzeug“ oder „DLK – Drehleiter mit Korb“. Das gilt im Reiter „Feuerwehr“, bei „Häufig“ und in der Fahrzeugauswahl.
- Bei unklaren Kürzeln (AB-G, AB-HFS) steht nur „Abrollbehälter“, die genaue Bedeutung ist nicht belegt.

Version 5.68:
- Großveranstaltung: Name, Ort/Adresse, Sanitätsstation und Besucherzahl sind frei wählbar. Die bisherigen Veranstaltungen gibt es weiter als Vorlage, alle Felder lassen sich ändern.
- Der Ort wird über die Adresssuche (OpenStreetMap) gefunden. Klappt das nicht, reicht ein bekannter Ortsname im Text (z. B. „Jever“).
- Dauer jetzt 1 bis 4 Tage. Neu ist die tägliche Betriebszeit (z. B. 10–01 Uhr). Anforderungen kommen nur, solange geöffnet ist.
- Die Zahl der RTW-Anforderungen richtet sich nach den Betriebsstunden. Bei ruhigem Verlauf sind es ca. 0,05–0,15 je Stunde, sonst ca. 0,15–0,35. Das ist eine Annahme.
- War die App zu (z. B. über Nacht), entfallen verpasste kleine Anforderungen. Ein geplanter MANV kommt dann ein paar Minuten später.

Version 5.67:
- OrgL und LNA sind jetzt getrennt. Die bisherigen „OrgL/LNA Varel“ und „OrgL/LNA Sande“ heißen „OrgL Varel“ und „OrgL Sande“ (Fahrzeugtyp „OrgL“).
- Neu: „LNA Friesland 1“ und „LNA Friesland 2“ (Typ „LNA“). Das sind Übungs-LNA, weil die echte LNA-Gruppe und ihre Rufnamen nicht hinterlegt sind.
- Der LNA kommt mit dem Privat-PKW:
  - Er ist nicht ortbar und erscheint weder auf der Karte noch an einer Wache. Im Vorschlag steht „Privat-PKW, nicht ortbar“ statt einer Ankunftszeit.
  - Er startet von einem zufälligen Ort im Landkreis oder in Wilhelmshaven (Wohnung, Praxis, Klinik). Nach jedem Einsatz ist das ein neuer Ort.
  - Vorlauf 5 Minuten, Fahrt ohne Sonderrechte (ca. 45 km/h). Beides ist eine Annahme.
- MANV: Der OrgL legt den Bereitstellungsraum fest. Die ärztliche Sichtung macht der LNA. Ist kein LNA im Einsatz, macht sie wie bisher der OrgL.
- AAOs: Wo bisher „OrgL/LNA“ stand, steht jetzt „OrgL“ und zusätzlich 1 LNA. Das gilt auch für selbst angelegte AAOs, damit sie weiter einen Arzt alarmieren.

Version 5.66:
- Neue Ereignisse in der Notrufabfrage: „👮 Polizeilage (Gewalt / Amok)“, „🦠 MANI“ und „🫂 MANB“ (mit eigenen AAOs 27, 28, 29).
- Polizeilagen: Die Polizei meldet, ob die Lage sicher ist.
  - Nicht sicher: Sie legt einen Bereitstellungsraum fest, der Rettungsdienst wartet dort und versorgt noch nicht.
  - Gewalt: Nach der Festnahme gibt die Polizei frei und die Fahrzeuge rücken zur Einsatzstelle vor.
  - Amok: Die Polizei bringt die Verletzten zur Patientenübergabestelle am Bereitstellungsraum; der MANV läuft dort.
  - Knopf „📞 Polizei nach der Lage fragen“. Neue Übungsanrufe: Messerangriff, Schlägerei, häusliche Gewalt, Amoklage.
- MANI (viele Infizierte/Erkrankte): ca. 5 % rot, 25 % gelb, Rest grün. Ein Teil der Grünen wird vor Ort versorgt und nicht transportiert.
  - Nach dem letzten Transport werden die Fahrzeuge 20–30 min desinfiziert. Übungsanrufe: Norovirus im Pflegeheim, Lebensmittelvergiftung auf einer Feier.
- MANB (viele unverletzt Betroffene): fast alle grün. Sie kommen in die Betreuungsstelle (GW-Betreuung) und werden dort übergeben, nicht ins Krankenhaus.
  - Ohne Betreuungsstelle fordert der OrgL nach ca. 12 min GW-Betreuung nach. Übungsanrufe: liegengebliebener Reisebus, Wohnungsbrand mit unbewohnbarem Haus.
- MANV/MANI/MANB: Knöpfe für die MANV-Komponenten nach dem niedersächsischen Rahmenkonzept (Nds. MBl. Nr. 5/2015 S. 136).
  - MANV-S: 1 NEF + 2 RTW aus einem Nachbarkreis (echte Nachbar-Fahrzeuge), fahren sofort.
  - MANV-T: 5 RTW/KTW für 5 liegende + 5 sitzende Patienten, Abmarsch ca. 30 min nach Alarmierung, pendeln mit.
  - MANV-PA: 2 MTW + GW-San mit Notarzt, Patientenablage für bis zu 15 Patienten (5 rot, 3 gelb, 7 grün), Abmarsch ca. 30 min.
  - Annahmen: MANV-T und MANV-PA sind Übungsfahrzeuge ohne echte Kennung (die echten Komponenten sind nicht hinterlegt). MANV-T als 2 RTW + 3 KTW, Standort = Mitte des Nachbarkreises.
- Großveranstaltung (Leitstelle, rechte Spalte): Veranstaltung mit Sanitätswachdienst starten (Stadtfest Varel, Open-Air Jever, Volkslauf Schortens, Hafenfest Wilhelmshaven – Übungsannahmen, keine echten Termine).
  - Dauer 30 min bis 2 h, Verlauf: Zufall, ruhig, kleiner MANV (6–12) oder großer MANV (25–55).
  - Der Sanitätsdienst meldet Dienstbeginn/-ende und fordert ab und zu einen RTW an. Beim MANV gibt er die erste Lagemeldung und betreibt eine kleine Sanitätsstation.
- Kleinigkeit: Ist die ärztliche Sichtung des OrgL schon da, kommt keine spätere Vorsichtung mehr, die sie überschreibt.

Version 5.65:
- MANV: Der DRK-ELW stellt Führungsassistenten für den OrgL/LNA.
  - Bei Ankunft meldet er die Übernahme von Lagekarte, Patientenregistrierung und Transportorganisation.
  - Die ärztliche Sichtung des OrgL kommt dadurch schneller (ca. 40 % kürzer), Transporte fahren ca. 25 % früher ab.
  - Etwa alle 10 Minuten kommt eine Zwischenmeldung: Patienten übernommen/wartend nach Farbe, anfahrende und pendelnde Transportmittel und wie viele RTW/KTW noch fehlen (auch als Nachforderung).
  - Am Einsatz steht „📋 Führungsassistenz“.
  - Der DRK-ELW ist jetzt auch in den AAOs MANV 10 und MANV 30 (bei MANV 50/>50 war er schon drin).
- AAO-Liste: neuer Bereich „➕ Zusatzalarmierung nach Fahrzeugmenge“. Regeln der Form „Wenn mindestens N Fahrzeuge / Ortsgruppen / Fahrzeuge vom Typ X (einer Organisation), optional nur bei einem Ereignis, dann zusätzlich n × Typ (Organisation)“.
  - Gezählt wird der fertige Alarmvorschlag.
  - Standardregeln: DLRG-ELW ab 2 DLRG-Ortsgruppen und ab 4 DLRG-Fahrzeugen. Sie ersetzen die bisher fest eingebaute Regel.
  - Regeln können ein-/ausgeschaltet, geändert, gelöscht und auf Standard zurückgesetzt werden. Sie werden mit der AAO gespeichert und exportiert.

Version 5.64:
- Fahrzeug-Bildschirm, Bodenfahrzeuge: „🧭 NAVI“ öffnet jetzt ein eigenes Navi im Vollbild statt der Handy-Navi-App.
  - Oben: Abbiegehinweis mit Pfeil und Entfernung, darunter der nächste Schritt. Ansagen auf Deutsch, abschaltbar.
  - Mitte: Karte mit Route, die dem Fahrzeug folgt (◎ zentriert wieder).
  - Unten: Ankunftszeit, Restweg, Ziel und Statustasten 1, 2, 3, 4, 5, 7, 8, 0, die direkt an die Leitstelle gehen.
  - Ziel automatisch: Einsatzstelle bzw. Bereitstellungsraum, bei Status 7/8 die Zielklinik aus IVENA, ohne Einsatz die Wache. Umschaltbar über Auto / Einsatz / Klinik / Wache.
  - Route über den öffentlichen OSRM-Server (OpenStreetMap). Wer mit GPS mehr als 60 m von der Route abkommt, bekommt eine neue Route. Ohne Netz gibt es die Luftlinie.
  - Ohne GPS startet die Route am Standort laut Leitstelle. „▶️“ fährt sie zum Üben ab.
  - Hubschrauber behalten die Flugansicht.

Version 5.63:
- Fahrzeug-Bildschirm: neuer Knopf „🧭 NAVI“. Bodenfahrzeuge öffnen die echte Navi-App des Handys mit der Einsatzstelle (bzw. dem Bereitstellungsraum) als Ziel: Google Maps, Apple Karten oder eine andere App über geo:. Luftfahrzeuge bekommen eine Flugansicht (dunkle Karte, Luftlinie, Kurs, Distanz in NM/km, Flugzeit bei 120 kt bzw. GPS-Geschwindigkeit, ETA, Zielkoordinaten in Grad/Minuten). Die Ansicht ist an Rescue Track angelehnt, aber nicht das echte System. Ohne GPS-Freigabe gilt der Standort laut Leitstelle.
- MANV-Verteilung: ca. 15 % rot, 20 % gelb, 60 % grün, 5 % blau. Verstorbene (unter 5 %) gibt es nur bei passenden Lagen (VU, Bus/Zug, Brand, Explosion, Einsturz). Bei Einklemmungen ist ein blauer Patient einer, dessen Rettung zu lange dauern würde.
- Evakuierung: neues Ereignis „🏃 Evakuierung“ mit den Fragen „Wie viele Personen? davon liegend? davon Rollstuhl?“ und eigener AAO (EVAK). Die KTW-Zahl richtet sich nach Liegenden/Rollstuhl, die MTW-Zahl nach Gehfähigen.
  - Ablauf: KTW/RTW fahren Liegende und Rollstuhlfahrer im Pendelverkehr zur Aufnahmeeinrichtung. Gehfähige gehen selbst oder fahren mit MTW zur Betreuungsstelle. Der GW-Betreuung baut eine Betreuungsstelle auf. Die Einsatzleitung gibt eine Lagemeldung und fordert bei Engpass weitere KTW an.
  - Alle Kräfte bleiben, bis die Evakuierung abgeschlossen ist. Der Fortschritt steht am Einsatz.
  - Neue Anrufer: Pflegeheim mit Rauch, Gasgeruch im Mehrfamilienhaus, Bombenfund (Ordnungsamt).

Version 5.62:
- MANV-Shuttle: Gibt ein Rettungsmittel seinen Patienten in der Klinik ab und warten an der Einsatzstelle noch Patienten, für die kein anderes Fahrzeug anfährt, fährt es direkt wieder hin (Status 3 ab der Klinik) und holt den nächsten. RTH nur für SK I, KTW nur für SK I–III. Sind alle Patienten weg, geht es wie bisher in Status 1.
- mSTaRT-Liste: Spalte „Verbleib“ statt „Transport“. Zeigt an: im BHP (DRK), in der Betreuungsstelle (DRK), palliativ vor Ort oder das Transportfahrzeug. Die Sanitätsstelle heißt jetzt „Behandlungsplatz (BHP)“.

Version 5.61:
- MANV: Der RTH übernimmt immer SK-I-Patienten, solange noch nicht alle SK I abtransportiert sind. Das gilt auch für Patienten, die schon ein RTW oder KTW hat, der noch nicht abgefahren ist (Übergabe an der Einsatzstelle). Der RTH bleibt so lange in Bereitschaft.
- MANV: KTW übernehmen SK I/II nur, wenn kein freier RTW da ist oder ein Notarzt beim Patienten ist; sonst SK III.
- MANV: Kommt ein RTW, übernimmt er vom KTW: SK I immer (außer ein anderer SK I ist noch unbetreut), SK II nur, wenn kein SK I/II mehr unbetreut ist. Ein mitbetreuendes NEF geht mit, die IVENA-Anmeldung des KTW wird gelöscht und der KTW übernimmt den nächsten Patienten.

Version 5.60:
- Fehler aus 5.59 behoben: Blaue Patienten (SK IV) wurden von RTW transportiert. Jetzt gibt es keinen Transport mehr. Ein RTW (oder ein NEF, wenn es nicht für Rot gebraucht wird) betreut den Patienten palliativ an der Einsatzstelle. Nach ca. 15–50 min verstirbt der Patient (Status „verstorben“, Meldung per SDS). Die Besatzung übernimmt danach den nächsten Patienten.

Version 5.59:
- IVENA: Jedes Krankenhaus hat 2 Schockräume. Sind beide mit S+-Patienten belegt (je ca. 60 min), meldet sich das Haus für S+ automatisch ab; Zuweisungen gehen dann ans nächste Haus. Anzeige in der IVENA-Matrix (belegt/gesamt) und in der Kurzübersicht.
- MANV: RTW nehmen Patienten in der Reihenfolge rot → blau → gelb → grün (blau jetzt vor gelb).
- MANV: NEF betreuen rot → blau → gelb → grün. Gelbe/grüne Patienten werden bis zum Transport versorgt; danach (oder wenn ein roter/blauer Patient frei wird) wechselt das NEF zum nächsten Patienten.

Version 5.58:
- MANV: RTH/ITH/KTH ohne freien SK-I-Patienten bleiben in Bereitschaft an der Einsatzstelle (SDS) und
  werden erst frei, wenn alle Patienten versorgt sind (alle haben ein Transportmittel). Wird ein
  SK-I-Patient frei, übernehmen sie ihn.
- Ebenso überzählige NEF: Sie bleiben in Bereitschaft, übernehmen nachrückende rote/blaue Patienten
  und werden erst frei, wenn alle Patienten versorgt sind.

Version 5.57:
- MANV: DRK-Einheiten bauen nach dem Eintreffen (Status 4) Stellen auf – Aufbau ca. 5 min, mit SDS:
  • GW-San → Sanitätsstelle für rote, gelbe und blaue Patienten (10 Plätze je Fahrzeug),
  • GW-Betreuung → Betreuungsstelle für grüne Patienten (25 Plätze),
  • GW-SEG → was noch fehlt (sonst zusätzliche Sanitätsstelle).
  Patienten ohne Transportmittel kommen dorthin, bis die Plätze voll sind; mit dem Transport verlassen
  sie die Stelle. Sind alle abtransportiert, wird abgebaut (10–15 min), danach Status 1.
- Anzeige im MANV-Kasten („⛑️ Sanitätsstelle 6/20 · 🫂 Betreuungsstelle 7/25“) und auf der MANV-Seite
  in der Spalte „Ort / Transport“ (Schadenstelle, Sanitätsstelle, Betreuungsstelle, Transport).

Version 5.56:
- Kurzlage aus dem Fahrzeug nur noch beim MANV („MANV bestätigt, geschätzt … Betroffene – Vorsichtung
  nach mSTaRT beginnt“, danach wie bisher die Vorsichtung) und bei Verkehrsunfällen (Zahl der PKW,
  Eingeklemmte, Fahrbahn).
- Fehler behoben: Die automatische Aktualisierung (alle paar Sekunden) hat geöffnete Formulare wieder
  geschlossen, z. B. „👮 Polizeileitstelle“ oder „📠 LST GOL“, und die Seite springen lassen. Jetzt wird
  nicht neu gezeichnet, solange ein Formular oder Fenster offen ist, man tippt oder in den letzten
  4 Sekunden etwas angetippt/gescrollt hat – danach wird nachgeholt, an derselben Scrollposition.

Version 5.55:
- Das erste eintreffende Fahrzeug gibt noch aus dem Fahrzeug eine Kurzlage per SDS (steht auch im
  Einsatzprotokoll), passend zur Lage: Wohnhaus/Pflegeheim „keine Gefahren erkennbar, gehen zum
  Patienten“, Reanimation durch Ersthelfer, Verkehrsunfall mit Zahl der PKW und Eingeklemmten,
  Brand mit Rauch und Personen im Gebäude, Wasser mit Person in Sicht oder nicht, CO-Warner schlägt an.
  Beim MANV bleibt es bei der bisherigen ersten Lagemeldung (Vorsichtung).

Version 5.54:
- Neuer Knopf „📻 Funkgruppe“ im geöffneten Einsatz: alle alarmierten Fahrzeuge des Einsatzes auf einmal
  in eine Funkrufgruppe setzen (alle Gruppen aller Kreise zur Auswahl) oder zurück in ihre
  Standardgruppen. Die gewählte Gruppe steht danach auf dem Knopf und im Einsatzprotokoll; auf der
  Seite „Funkrufgruppen“ erscheinen die Fahrzeuge in der neuen Gruppe.

Version 5.53:
- Anrufer sagen als Erstes, wo sie sind (Adresse mit Stockwerk/Hinweis, am Strand, auf der Straße,
  im Pflegeheim …), danach was passiert ist. Ausgenommen: Verwählt. Fragt man danach nochmal „Wo genau?“,
  wiederholen sie den Ort.

Version 5.52:
- Updates kommen schneller an: Die App-Seite wird am Browser-Cache vorbei geladen (Service Worker v5).
- Versehentlich mit hochgeladene Test-Bildschirmfotos aus dem Projekt entfernt.
- Fehler behoben (aus 5.48): Beim MANV meldeten sich NEF nach wenigen Minuten frei, obwohl rote und
  blaue Patienten einen Notarzt brauchten. Jetzt:
  • Während der Sichtung warten alle NEF an der Einsatzstelle.
  • Danach übernimmt jedes NEF einen roten (SK I) oder blauen (SK IV) Patienten (SDS „Übernehme Patient …
    notärztlich“) und begleitet ihn beim Transport.
  • Frei wird ein NEF nur, wenn mehr NEF vor Ort/auf Anfahrt sind als rote und blaue Patienten ohne
    Notarzt („genügend Notärzte vor Ort“).
- Bei der ärztlichen Sichtung bleiben die Zuordnungen von RTW und NEF zu ihren Patienten erhalten.

Version 5.51:
- RTH (außer MANV) arbeitet wie ein NEF: begleitet den RTW bei kritischen Patienten, ist sonst nach
  6–12 min „frei Einsatzstelle“. Selbst transportiert er nur bei Reanimation oder wenn kein
  bodengebundenes Transportmittel im Einsatz ist.
- Druckkammer: RTH ist erste Wahl. Fliegt stattdessen der KTH, nimmt er den Notarzt des NEF mit; das NEF
  fährt ins NWK Sanderbusch und wartet dort in Status 6. Nach der Übergabe fliegt der KTH in Status 6
  mit dem Notarzt ins NWK zurück – dann sind NEF und KTH wieder einsatzbereit (Status 1).
- CO-Patienten werden mit PZC 370 (Intoxikation Kohlenmonoxid) angemeldet.
- Karte: Zoom und Ausschnitt bleiben beim automatischen Neuzeichnen erhalten. Neu ausgerichtet wird
  nur bei einem anderen Einsatz oder einem neuen Einsatzort.

Version 5.50:
- Weitere Nachbar-Rettungsmittel (BOS-Fahrzeuge-Wachenseiten): Florian Oldenburg 01/82-01 (NEF),
  01/83-01, 01/83-02 (FuRW 1, Ibo-Koch-Straße 6), Florian Oldenburg 03/82-01 (NEF, RW 3 Klinikum),
  Johannes Oldenburg-Land 61/83-01 (RW Harpstedt), Akkon Wesermarsch 49/83-01 (RW Stollhamm).
  Reserve- und a.D.-Fahrzeuge nicht übernommen. Ammerland laut BOS-Fahrzeuge schon vollständig.

Version 5.49:
- MANV: Hubschrauber (RTH/ITH/KTH) transportieren nur noch SK-I-Patienten. Ist kein SK I mehr offen,
  melden sie sich „nicht benötigt“ und werden frei (auch auf Anfahrt).
- Neuer Einsatz (selten): schwere CO-Vergiftung (CO-Melder piept, Gastherme/Kohlegrill/Kaminofen).
  Der RTW vor Ort fordert per SDS Druckkammer + KTH an. Kommt der KTH Northern 06 (oder ein RTH/ITH),
  übernimmt er den Patienten und fliegt zur Druckkammer Kronshagen bei Kiel (24-h-Kammer laut GTÜM);
  sonst nach 45 min Transport in die nächste Klinik. AAO-Check weist auf Feuerwehr und HBO hin.
- IVENA: Druckkammer Kronshagen (24 h, GTÜM Liste 2) und Druckkammer Soltau (eingeschränkt, keine
  intubierten Patienten, GTÜM Liste 3) mit Telefonnummern. Druckkammern werden nur bei
  „Druckkammer (HBO)“ angefahren, nie als normale Klinik. Koordinaten ungefähr.

Version 5.48:
- Nicht benötigte Fahrzeuge werden automatisch frei (Status 1, mit SDS und Eintrag im Protokoll):
  • weitere Rettungsmittel auf Anfahrt, wenn alle Patienten schon versorgt sind („Abbestellt“),
  • NEF auf Anfahrt, wenn der RTW vor Ort keinen Notarzt braucht,
  • NEF vor Ort ohne Notarzt-Bedarf nach 6–12 min „frei Einsatzstelle“ (kritisch: wartet auf den RTW
    und begleitet ihn),
  • Feuerwehr & Co. bei rein medizinischen Einsätzen 5–10 min nach Übergabe an den Rettungsdienst,
  • MANV: sobald alle Patienten ein Rettungsmittel haben, alle weiteren RTW/NEF/KTW/RTH (auch auf
    Anfahrt).
  Fahrzeug-Handys bekommen nur die SDS und melden den Status selbst.
- Bearbeitungsstand an jedem Einsatz (Farbleiste links, 5 Stufen rechts in der Zeile, im geöffneten
  Einsatz als Balken): Unbearbeitet · Alarmiert (Status 3) · mind. ein Fahrzeug vor Ort (Status 4) ·
  vor Ort abgearbeitet (Status 7) · Patient im Krankenhaus (Status 8).

Version 5.47:
- Fehler behoben: Ausgeliehene Nachbar-Fahrzeuge wurden anhand ihrer Kennung einer eigenen Wache
  zugeordnet (z. B. Rettung Wittmund 84/83-01 → „Sande“, 82/83-01 → „Varel“). Sie stehen jetzt
  unter ihrer echten Wache (Westerholt, Esens …); die Gebietsabsicherung steht als Hinweis dabei.
- Fahrzeuge › Rettungsdienst: erst nach Landkreis/Stadt, dann nach Wache.
- Stadt Wilhelmshaven eingebaut (gehört zur Leitstelle Friesland-Wilhelmshaven): Florian Wilhelmshaven
  01/83-01, 01/83-02 (FuRW 1, Mozartstraße 11), 02/83-01 (FuRW 2, Inhauser Landstraße 20), NEF 03/82-01
  (RW 3 am Klinikum). Reservefahrzeuge und der MHD-RTW (Funkrufname unbekannt) fehlen bewusst.
  Notrufe kommen jetzt auch aus Wilhelmshaven; Wilhelmshaven gilt nicht mehr als „nicht zuständig“.

Version 5.46:
- „Fahrzeuge bearbeiten“ (und Nachforderung): Bei jedem Fahrzeug steht der aktuelle Status als farbiges
  Schild (z. B. „4 · Am Einsatzort“) – bei den zugeordneten Fahrzeugen und bei allen Auswahl-Knöpfen.

Version 5.45:
- Der 📞-Knopf oben ist jetzt die Notrufannahme des Platzes und gilt für ALLE Anrufe (Übungsnotrufe,
  19222, vorbereitete Anrufe, weitergeleitete Anrufe, Anrufer-Handy, Anrufe der Nachbar-Leitstellen).
  📞✕ = an diesem Platz klingelt nichts. Anrufe gehen dann an einen anderen Platz mit Notrufannahme;
  gibt es keinen, kommen keine Übungsnotrufe.
- Beim Ausschalten werden gerade klingelnde Anrufe an einen annehmenden Platz weitergegeben.
- Überlauf: Klingelt ein Anruf 45 Sekunden ohne Annahme, geht er an einen anderen annehmenden Platz.
- Beim Verlegen sieht man, welche Plätze die Notrufannahme aus haben.

Version 5.44:
- Hinweis auf schnellere Nachbar-Fahrzeuge nur noch, wenn der Einsatz einen RTW braucht (laut Vorschlag/
  AAO oder Alarmierung), und nur für RTW. Statt des blinkenden Banners ein blauer Knopf
  „📞 GOL anfragen – RTW“ (bzw. KRLS Ostfriesland, mit Anzahl der fehlenden RTW). Während die Anfrage
  läuft, verschwindet der Knopf.
- Bei den Nachbar-Leitstellen fragt man nur noch Art und Anzahl an (RTW, NEF, KTW, SRTW, NAW,
  Baby-NAW …) – welches Fahrzeug kommt, entscheidet die Nachbar-Leitstelle. Die Auswahlliste
  einzelner Nachbar-Fahrzeuge entfällt.

Version 5.43:
- Notrufe an andere Plätze verlegen (bei Live-Sync mit mehreren Plätzen):
  • Klingelnder Anruf: „➡️ Platz“ im Anrufbanner – er klingelt dann am gewählten Platz.
  • Laufendes Gespräch: „➡️ Platz“ in der grünen Telefonleiste – der Anrufer wird gehalten, der
    Zielplatz bekommt ein violettes Übergabe-Banner und übernimmt mit „✅ Übernehmen“
    (Anrufer: „Hallo? Ja, ich bin noch dran.“).
  • Alarmierter Einsatz: „➡️ An Platz“ in der Einsatzkarte – Besatzungen/SDS laufen danach über
    den neuen Platz.
  • Nicht übernommen → nach 90 Sekunden automatisch zurück. Alles steht im Einsatzprotokoll.

Version 5.42:
- SRTW sind Johanniter-Fahrzeuge: Akkon Oldenburg 50/89-01 (Standort angenommen: Johanniter-Wache
  Alte Fleiwa 2a) und Akkon Wittmund 81/89-01 (ehrenamtlich, genauer Standort noch offen).

Version 5.41:
- NAW (Bund) am Bundeswehrkrankenhaus Westerstede heißt jetzt Florian Ammerland 15/81-01
  (Nutzerangabe 15/81-1).

Version 5.40:
- SRTW tragen die Kennung 89 („SRTW 89 Oldenburg“, „SRTW 89 Wittmund (ehrenamtlich)“).

Version 5.39:
- Baby-NAW „Felix“ heißt jetzt Florian Oldenburg 02/86-01 (Nutzerangabe 2-86-1).

Version 5.38:
- Baby-NAW Oldenburg „Felix“ trägt die Kennung 86 („Baby-NAW 86 …“). Vollständiger Funkrufname
  (Wachen-Nummer) noch offen.

Version 5.37:
- NAW Bundeswehrkrankenhaus Westerstede trägt die Kennung 81 („NAW 81 …“). Vollständiger Funkrufname
  (Wachen-Nummer) noch offen.

Version 5.36:
- NAW des Bundes am Bundeswehrkrankenhaus Westerstede (LK Ammerland, über die GOL anforderbar,
  „📞 NAW anfragen“). Transporte mit dem NAW gelten in IVENA als arztbegleitet.
  Standort laut Nutzerangabe, Funkrufname nicht belegt.

Version 5.35:
- Neue Sonderfahrzeuge bei den Nachbarn (nur über die Nachbar-Leitstelle anforderbar):
  Baby-NAW Oldenburg „Felix“ (Klinikum Oldenburg, Kinderklinik), SRTW Oldenburg, SRTW Wittmund
  (ehrenamtlich, längere Ausrückzeit). SRTW: Funkrufname und Standort NICHT belegt – bitte prüfen.
  Sonderfahrzeuge werden nie als „letztes freies Fahrzeug“ zurückgehalten.
  Im Nachbar-Fenster: „📞 SRTW anfragen“ / „📞 Baby-NAW anfragen“.
- Neue Einsätze im Seniorenpflegeheim (Pflegekraft ruft an): Sturz mit Hüftverletzung, Atemnot mit
  Fieber, Bewohnerin kaum wach/trinkt nicht, Unterzuckerung.
- Ganz selten (höchstens einmal am Tag): Schwerlast-Patient zu Hause (SRTW nötig) und
  Inkubatortransport eines Frühgeborenen aus dem Kreißsaal St. Johannes-Hospital Varel ins
  Perinatalzentrum Klinikum Oldenburg (Baby-NAW). Der AAO-Check weist darauf hin.
- Manchmal (ca. 1 % der RTW-Transporte) fordert der RTW vor Ort per SDS einen SRTW nach. Kommt der
  SRTW, übernimmt er den Patienten und der RTW wird frei; ohne SRTW nach 75 min Transport mit
  Tragehilfe der Feuerwehr.
- Baby-NAW meldet sich in IVENA beim Klinikum Oldenburg (Pädiatrie) an.

Version 5.34:
- Neue Seite „🚨 MANV“ (Seitenleiste, auch „🚨 Alle Patienten“ im MANV-Kasten): alle Patienten
  aller laufenden MANV mit Karte, Sichtungskategorie (SK I–IV, verstorben), wer gesichtet hat,
  Uhrzeit, Umsichtungen und Transport; Filter je Farbe. Aktualisiert sich alle 3 Sekunden.
- Sichten per Fahrzeug-Handy (Status 4 oder 7, bei MANV-Einsätzen): Patientenkarte als Nummer
  antippen, dann Farbe wählen; nochmal antippen = umsichten. Die Leitstelle sieht es sofort.
  Berechtigt: RTW, RTH, KTW, NKTW, KTH, NEF, ITW, ITH, NAW, GW-San, GW Wasserrettung und GW Drohne
  der DLRG, ELW/MTW/MZF des DRK. Karten: NEF 25, GW-San und DRK-ELW 50, alle anderen 15.
  Kartennummer = Fahrzeugkennung + laufende Nummer (z. B. 42/83-01-03).
- MANV: fehlende Rettungsmittel werden ohne Rückfrage direkt aus den Nachbarkreisen alarmiert
  (auch von weiter weg); die Nachbar-Leitstellen werden nur informiert. DRK-Rettungsmittel
  (sonst Hintergrunddienst) gehören beim MANV mit in den Vorschlag.
- Gebietsabsicherung: Jede eigene RTW-/NEF-Wache ohne freies Fahrzeug bekommt automatisch ein
  Nachbar-Fahrzeug (ein Nachbarkreis gibt dabei nie sein letztes freies ab). Es fährt an die
  Wache und übernimmt neue Einsätze im Kreis. Nach Ende des MANV fährt es heim (sonst nach
  seinem laufenden Einsatz). Während eines MANV fragen die Nachbarn keine Fahrzeuge bei uns an.

Version 5.33:
- MANV-Stufen als eigene AAOs (im AAO-Bereich „MANV“, frei änderbar):
  MANV 5 (4–5 Betroffene), MANV 10 (6–10), MANV 30 (11–30), MANV 50 (31–50), MANV >50.
  Das Stichwort lautet z. B. „MANV 30 – R1_VU – 22 Verletzte“; IVENA zeigt dieselbe Stufe.
  Fahrzeuglisten der neuen Stufen sind ein Vorschlag (bitte an den örtlichen Alarmplan anpassen).
  Die RTW-Anzahl steigt weiterhin auf mindestens 1 RTW je 3 Verletzte.
- mSTaRT mit SK IV (blau): „Verletzungen ohne Überlebenschance“ als eigener Schritt nach der
  Atmung; SK IV schon in der Vorsichtung, in der Sichtungsliste und beim Selbst-Sichten.
  Bei großen Lagen (ab 30) gibt es anteilig mehr SK IV und Verstorbene.

Version 5.32:
- MANV-Sichtung nach mSTaRT: Jeder Betroffene hat eine Anhängekarte (Nummer) mit Befund
  (gehfähig, Atmung/Atemwege, Atemfrequenz, massive Blutung, Radialispuls, Aufforderungen befolgen).
  Kategorie wird streng nach mSTaRT ermittelt (Kinder unter 8: AF-Grenzen 15/45 nach JumpSTART).
- Erste Lagemeldung = Vorsichtung nach mSTaRT (rot/gelb/grün/verstorben, noch ohne blau);
  OrgL/LNA meldet die ärztliche Sichtung (inkl. SK IV blau).
- Im MANV-Kasten des Einsatzes: „📋 Sichtung (mSTaRT)“ – Liste aller Anhängekarten mit Befund,
  Kategorie und übernehmendem Rettungsmittel, dazu das mSTaRT-Schema zum Aufklappen.
- „🎓 Selbst sichten“: Befund lesen, Kategorie wählen, Rückmeldung mit dem Weg durch das Schema
  und Auswertung am Ende.
- Rettungsmittel melden per SDS Kategorie (SK I–IV), Anhängekarte und Verletzung ihres Patienten.

Version 5.31:
- Anrufer verstehen deutlich mehr: Umgangssprache („Isser noch bei sich?“, „Kriegt er Luft?“,
  „Medis?“, „Jahrgang?“, „Wo seid ihr?“), viele Synonyme und Umschreibungen, Rechtschreib- und
  Tippfehler, getrennt erkannte Wörter („an sprechbar“, „Rück ruf nummer“) und Wörter, die nur
  ähnlich klingen.
- Unbekannte Wörter: Der Satz wird zuerst so genommen, wie er gesagt wurde; erst wenn nichts passt,
  wird korrigiert. Passt dann immer noch nichts, errät der Anrufer das Thema aus den erkennbaren
  Wörtern und antwortet darauf (manchmal mit Rückfrage „Ob er atmet? …“).
- Neue Antworten: Sprachstörung, hängender Mundwinkel, Lähmung/Kribbeln, liegt noch am Boden,
  Krampfanfall, Trinken, Hautausschlag/Glastest, Impfungen, Defi in der Nähe.
- Fehler behoben: „weiter“ wurde zu „Wetter“, „Kleine“ zu „kühlen“, „gestoßen“ zu „gestochen“
  korrigiert; „wegdrückbar“ löste Herzdruckmassage aus; „Was war los, bevor er umgefallen ist?“
  wurde als Sturzfrage beantwortet; „Seit wann?“ wurde doppelt beantwortet; Nachfragen zum
  letzten Thema überdeckten einen Themenwechsel (z. B. „Wo ist die Unfallstelle?“ → „Am Kopf.“).

Version 5.30:
- Anrufer klingen menschlicher: jede Person bekommt eine eigene Stimme (die natürlichsten deutschen
  Stimmen des Geräts zuerst, passend zu Geschlecht und Alter), eigene Tonhöhe und eigenes Tempo.
- Aufregung je nach Lage: bei schlimmen Sachen (Reanimation, Bewusstlosigkeit, Panik) sprechen sie
  schneller und höher, stocken („Er… er atmet nicht!“), rufen „Oh Gott, oh Gott!“, wiederholen sich.
  Beruhigen und „Hilfe ist unterwegs“ senken die Aufregung. Ruhige Anrufer sagen auch mal „Äh, …“.
- Plattdeutsch: vor allem ältere Anrufer schnacken Platt – mal nur mit Platt-Einschlag, mal richtig.
  Bitte um Hochdeutsch („Können Sie Hochdeutsch sprechen?“) wird befolgt. Platt vom Disponenten wird
  verstanden („Wat is passeert?“).
- Neuer Knopf 🗣️ (im Sprachmodus): Plattdeutsch Aus / Ab und zu / Oft, Stimmen an-/abwählen und
  probehören, Hinweise wie man bessere Stimmen bekommt (iPad: Premium-Stimmen laden; Windows: Edge).

Version 5.29:
- Eigene Szenarien werden zusätzlich in der Datenbank gespeichert und stehen auf allen Geräten zur
  Verfügung (Szenario-Auswahl lädt den neuesten Stand; neuester Stand gewinnt). Anlegen, Ändern und
  Löschen gelten überall. Ohne Internet wird lokal gespeichert und beim nächsten Öffnen nachgeholt.
  Der Spielstand eines Szenarios läuft wie bisher über die Live-Verbindung der Sitzung.

Version 5.28:
- Eigene Szenarien (beliebig viele, löschbar): Auf der Szenario-Auswahl („🔀 Szenario wechseln“)
  „＋ Neues Szenario anlegen“, ✏️ Bearbeiten, 🗑️ Löschen (löscht auch den Spielstand).
  • Name, Landkreis/Gebiet, Kurzzeichen (für die Funkrufgruppen, z. B. CUX).
  • Karte: Ort suchen; „🏠 Wache setzen“ / „🏥 Klinik setzen“ und auf die Karte tippen; Marker
    verschiebbar. Der Kartenausschnitt beim Speichern ist der Start-Ausschnitt der Leitstelle.
  • Je Wache Organisation und beliebig viele Fahrzeuge: Typ, Anzahl, Funkrufname-Anfang
    (z. B. „Rettung Cuxhaven 1/83-“ → …-01, -02 …).
  • Kliniken mit Fachrichtungen (für IVENA und Transporte).
  • Jedes Szenario hat einen eigenen, getrennten Spielstand. AAO = Standard-AAO (änderbar).
  • Übungsnotrufe kommen aus dem Umkreis der Wachen; Straße/Ort per Rückwärtssuche (OSM).
    Keine Wasser-Fälle (keine Gewässerdaten), keine Nachbarkreise/-anfragen.
  • Gespeichert nur auf diesem Gerät; Monitore/Fahrzeug-Handys bekommen die Daten über die
    Live-Verbindung.

Version 5.27:
- Nachbarkreise fahren eigene Einsätze: Ihre Rettungsmittel durchlaufen selbstständig 3 → 4 → (7 → 8)
  → 1 → 2. Gebunden ist je Kreis etwa 40 % tagsüber (8–20 Uhr), 28 % morgens/abends, 15 % nachts
  (eigene Annahme). Auf der Nachbar-LK-Seite sieht man den Status; von Hand gesetzte Status bleiben
  60 min unangetastet.
- Nachbar-Fahrzeuge gibt es nur noch über die zuständige Leitstelle (KRLS Ostfriesland / GOL):
  „📞 Anfragen“ (bestimmtes Fahrzeug oder „irgendeinen RTW/NEF“). Nach 20–60 s kommt die Antwort:
  Zusage (sie alarmieren, das Fahrzeug erscheint bei uns in Status 3) oder Absage (z. B. letzter
  freier RTW im Kreis, angefragtes Fahrzeug inzwischen selbst im Einsatz – dann ggf. Ersatz).
  Antwort im Einsatzverlauf, im SDS-Eingang und als Hinweis. Schlägt die AAO ein Nachbar-Fahrzeug
  vor, wird es beim Alarmieren automatisch angefragt statt direkt alarmiert.
- Anfragen der Nachbarn an uns kommen bevorzugt aus dem Kreis, der gerade am stärksten gebunden ist.

Version 5.26:
- Rettungsmittel der Nachbarkreise eingepflegt (alle Kreise mit sichtbaren Rufgruppen außer FRI):
  Ammerland 14, Wesermarsch 10, Wittmund 10, Leer 17, Aurich 20, Oldenburg Stadt 16, Oldenburg Land 7
  (RTW, NEF, KTW, NKTW). Quelle: Wachenseiten auf bos-fahrzeuge.info (Stand Abruf 28.10.2026) –
  gelistet ist, was dort eingetragen ist, nicht zwingend der komplette Bestand. Nicht aufgenommen:
  Reserve-/Ersatzfahrzeuge, KdoW, ITW, Inselwachen (kommen nicht aufs Festland) und Fahrzeuge ohne
  bekannte Wache (z. B. Akkon Wesermarsch 49/83-01). Bei neuen Wachen ist die Koordinate zunächst
  nur die Ortsmitte; sie wird im Gerät einmal über die Adresse (OpenStreetMap) genauer bestimmt.
  Adresse RW 3 Oldenburg = Klinikum Oldenburg (stand nicht auf der Quellseite).
- Nachbar-Leitstellen rufen an (bei eingeschalteten Übungsnotrufen etwa alle 30–60 min): KRLS
  Ostfriesland oder GOL bitten um RTW/NEF für einen Einsatz nahe der Kreisgrenze (lila Banner).
  Annehmen → Anfrage lesen (im Sprachmodus vorgelesen) → Fahrzeug wählen (nach Fahrzeit sortiert)
  → „Schicken (Amtshilfe)“ legt einen Einsatz „AMTSHILFE LK … – …“ an und alarmiert; danach läuft
  alles automatisch (Status, Transport, IVENA, SDS, Abschluss). „Ablehnen“ oder nach 90 s
  unbeantwortet → sie fragen woanders. Orte sind Ortsmitten (ungefähr).
- Nachbar-LK-Seite: zusätzlich Aurich, Oldenburg (Stadt) und Oldenburg (Land).

Version 5.25:
- Funkrufgruppen: Fahrzeuge werden in den Gruppen nicht mehr aufgelistet – nur noch die Anzahl
  (und Sprechwünsche). Umsetzen weiter über „＋ Fahrzeug in diese Gruppe setzen“.

Version 5.24:
- Fahrzeugauswahl überall in aufklappbaren Kategorien (Organisation bzw. Nachbar-LK, darin nach
  Fahrzeugtyp): SDS-Empfänger, „Fahrzeuge vor Alarmierung bearbeiten“, IVENA-Zuweisung
  (Transportmittel, Begleit-NEF), Fahrzeug-Handy (Transportmittel), Funkrufgruppen („＋ Fahrzeug in
  diese Gruppe setzen“). Kategorien sind zu, bis man sie antippt. In „Rettungsmittel hinzufügen /
  Nachforderung“ sind die Typen (RTW, NEF …) und THW-Fachgruppen jetzt ebenfalls zugeklappt;
  „Nächstes freies“ bzw. „Ganze Fachgruppe“ geht weiter direkt.
- SDS an alle: „Alle im Einsatz (Status 3/4/7/8)“, „Alle Fahrzeuge“, „Alle <Organisation>“ oder ein
  einzelnes Fahrzeug; Schnelltexte (Status?, Wie lange noch?, Lage?, Zielklinik? …).
- Fahrzeuge antworten per SDS (nach 8–35 s) passend zur Frage und zum echten Stand: Status und
  Position, Eintreffzeit, Lage/Patient bzw. MANV-Sichtung, Zielklinik mit PZC und Ankunft,
  einsatzbereit ja/nein, Besatzung; sonst „Verstanden“. Bei „an alle“ antworten alle im Einsatz und
  ein paar weitere. Fahrzeuge mit offenem Fahrzeug-Handy antworten dort selbst („↩️ Antworten“).
- SDS-Eingang zeigt gesendete (📤) und empfangene SDS mit Bezug zur Frage; ↩️ = direkt antworten.

Version 5.23:
- Funkrufgruppen: DLRG und DGzRS standardmäßig auf F (mit der Feuerwehr), Rettungsdienst und
  Luftrettung auf R, DRK und THW auf K.

Version 5.22:
- Neue Seite „📻 Funkrufgruppen“ (Seitenleiste): Kreise FRI, WST, OL, BRA, WTM, AUR, LER mit je
  „<Kreis> Anruf“ und F/K/R mit je 3 Gruppen (z. B. F FRI 1–3, K FRI 1–3, R FRI 1–3).
  • Gruppe antippen bzw. „Schalten“ = Leitstelle auf diese Gruppe schalten (🎙️), 🔈/🔊 = mithören.
  • Jedes Fahrzeug steht in einer Gruppe: Standard nach Organisation (Feuerwehr, DLRG, DGzRS → F;
    Rettungsdienst, Luftrettung → R; DRK, THW und übrige → K) und Kreis (Nachbar-Fahrzeuge in ihrem Kreis, Gruppe 1). Umsetzen über die
    Auswahl neben dem Fahrzeug oder „＋ Fahrzeug in diese Gruppe setzen“; ✳️ = umgesetzt;
    „↺ Alle zurück in Standardgruppe“. Sprechwünsche (Status 0/5) erscheinen in ihrer Gruppe mit ✓.
  • Reine Übungsanzeige, keine echte Funktechnik; keine Gruppennummern (TMO) hinterlegt.

Version 5.21:
- Funkrufgruppen-Leiste (F/K/R Fri …) unten in der Leitstellen-Übersicht entfernt.

Version 5.20:
- Notrufe zusammenführen: Der zweite Anruf wird nicht mehr aufgelegt, sondern gehalten (Telefon-
  leiste orange „⏸️ Gehalten – zusammengeführt mit #…“, Öffnen/Auflegen wie gewohnt). Man landet
  direkt in „📝 Notruf ändern“ des Einsatzes, in den zusammengeführt wurde. Erst beim Auflegen wird
  der gehaltene Anruf abgelegt; in der Einsatzübersicht erscheint er nicht doppelt.

Version 5.19:
- Zahl-Bausteine beginnen überall bei 0 (auch „Wie viele Personen/Tiere sind betroffen?“).

Version 5.18:
- Übungsnotrufe „Tierrettung“ (Ereignis wie selbst angelegt: „Tierrettung“): höchstens einer pro
  Tag und Gerät, er kommt zufällig etwa bei jedem 12. Übungsnotruf. Fälle: Pferd im Graben,
  Kuh im Graben, Hund im Wasser an den Steinen, Katze im Baum, Reh im Weidezaun, Schaf im Graben
  am Deich. Keine verletzten Menschen.
- Der Anrufer beantwortet Fragen zum Tier (verletzt? lebt es? wem gehört es? Tierarzt/Jäger?
  wie groß?) und reagiert auf „Gehen Sie nicht selbst rein/hinterher“.
- Tierrettungs-Anrufe werden auch ohne passende AAO angeboten (eigenes Ereignis); der AAO-Check
  nach der Alarmierung zeigt, was laut AAO zu alarmieren war.

Version 5.17:
- Zahl-Bausteine überall, wo die Abfrage eine Zahl braucht: Betroffene, eingeklemmt/eingeschlossen,
  durch Feuer bedroht, verletzt/gefährdet (0 1 2 3 4 5 6 8 10 15 20), Alter (Säugling, Kleinkind,
  Kind, Jugendl., 20 … 90+ und „Unbekannt“), eigene Zahl-Fragen und die Patientenzahl bei X
  (1–3, 4–20 → MANV). Einzelfragen: Antippen beantwortet sofort; in Masken wird der Baustein
  markiert. Das Zahlenfeld bleibt für andere Werte.
- Antworten bearbeiten jetzt für alle Auswahlfragen (AAO-Seite → Notrufabfrage → „✏️ Antworten
  bearbeiten“): Was ist passiert, Feuer (was ist zu sehen / was brennt), Person im Wasser, Zustand im
  Wasser, Psy, Geschlecht – zusätzlich zu XABCDE. Text ändern, Reihenfolge, löschen, neue Antworten
  („zählt als“ Standardwert oder eigene Antwort). Eigene Antworten stehen sofort als AAO-Bedingung
  zur Auswahl. Neue AAO-Bedingungen: „Person im Wasser (Abfrage)“ und „Geschlecht“.
- Nicht dabei: „Weitere Gefahren“ (ist nur ein Häkchen im Freitext).

Version 5.16:
- Status 4 bei Ankunft für alle Fahrzeuge: Fahrzeuge, die einmal per Handy gesteuert wurden
  („phoneControlled“), blieben für immer von der Automatik ausgenommen – vermutlich der Grund, warum
  DRK-Fahrzeuge nicht auf 4 gingen. Jetzt gilt die Handy-Steuerung nur, solange das Fahrzeug-Handy
  wirklich offen ist (Lebenszeichen alle 60 s, 5 min Toleranz).
- Fahrzeug in mehreren offenen Einsätzen: zählt der jüngste Einsatz.
- SK statt „schwer/leicht“: SK1 direkt transportieren (vor Ort 10–20 min), SK2 möglichst schnell
  (12–25 min), SK3 wenn's passt (15–30 min, ggf. ambulant). PZC-Dringlichkeit = SK.
- MANV:
  • erstes Rettungsmittel meldet nach 2–4 min eine erste Lagemeldung, der OrgL nach 5–10 min das
    Sichtungsergebnis: Betroffene gesamt, rot/gelb/grün/blau/schwarz – als SDS, im Verlauf und als
    farbige Leiste direkt unter dem Einsatz (Übersicht und Einsatzkarte).
  • Rettungsmittel übernehmen die Patienten in der Reihenfolge SK1 → SK2 → SK3 → blau; Kliniken
    werden verteilt. Fehlen Transportmittel: „⚠️ x Pat. noch ohne Transportmittel – nachalarmieren!“
  • Bereitstellungsraum: „OrgL legt fest“ (Standard, wenn ein OrgL alarmiert ist – er meldet den BR
    per SDS, gesucht wird ein echter Parkplatz/Sportplatz in der Nähe aus OpenStreetMap) oder „BR
    festlegen“ durch die Leitstelle (Adresse eingeben). Nachrückende Landfahrzeuge fahren zum BR.
- Hubschrauber landen auf einer freien Fläche in der Nähe (Sportplatz/Park/Parkplatz aus
  OpenStreetMap, sonst geschätzt ~150 m daneben) – steht unter dem Einsatz. Bei Einsätzen auf dem
  Wasser fliegen Windenhubschrauber weiter direkt hin.
- Feuerwehr, THW, DLRG, ELW, OrgL beenden ihre Arbeit nach realistischer Zeit (Brand 35–75 min,
  größer 60–120, VU/TH 30–60, Wasser/Suche 40–90, Med. Notfall 15–30); Führung bleibt, bis alle
  Patienten weg sind.
- Einsätze werden automatisch abgeschlossen, wenn alle alarmierten Fahrzeuge 1 Minute lang wieder
  frei sind (Status 1/2). Fahrzeuge, die schon im nächsten Einsatz sind, werden dabei nicht verändert.
- Mehrere Anrufer: Unfälle/Ereignisse auf der Straße, am Strand oder im Wasser melden tagsüber oft
  1–3 weitere Zeugen, abends 0–1, nachts selten. „Das ist uns schon bekannt“ → Zeuge verabschiedet
  sich und legt auf.
- „📎 Gleicher Ort wie ein offener Einsatz – zusammenführen?“ (Umkreis 350 m): Angaben des Anrufs
  kommen in den Verlauf des Einsatzes, der zweite Notruf wird geschlossen. „Nein, eigener Einsatz“
  blendet den Hinweis aus.
- Boot in Not: Einsatzort „vor dem Strand …, etwa 300 Meter draußen auf dem Wasser“.

Version 5.15:
- Besatzungen arbeiten selbst: RTW, NKTW, KTW, RTH, ITH, KTH (nicht per Handy gesteuert) entscheiden
  am Einsatzort selbst – auch bei Übungsnotrufen (dort zählt der wahre Zustand des Patienten):
  • kein Patient vor Ort / kein weiterer Patient → SDS, Status 1
  • leicht (R0/unauffällig, Telefon-Fälle): meist ambulant vor Ort versorgt → SDS, Status 1
  • sonst Transport: IVENA-Anmeldung durch die Besatzung (PZC aus Lage/Befund, Dringlichkeit nach
    Schwere, Zielklinik = nächste passende Fachrichtung, die nicht abgemeldet ist; Schockraum,
    reanimiert/beatmet, arztbegleitet; Eintreffzeit nach Fahrzeit) und SDS an die Leitstelle:
    „Pat. M, 66 J. – Unklarer Brustschmerz – IVENA angemeldet: Klinikum Wilhelmshaven
    (Kardiologie), PZC 331662, Ankunft ca. 00:30 Uhr.“
  • NEF begleitet bei kritischen Patienten/Reanimation (fährt mit in 7/8), sonst nach der
    Versorgung wieder frei. Mehrere RTW = mehrere Patienten (eigene Daten).
  • Zeiten (eigene Annahmen): vor Ort 15–25 min (leicht/normal), 18–28 (dringend), 20–35
    (kritisch), 35–50 (Reanimation); Status 7 = Fahrzeit (Sonderrechte nur bei Dringlichkeit 1);
    Status 8 = Übergabe 10–20 min (kritisch 15–25, NEF 8–15); danach Status 1 → Rückfahrt.
  • Hat der Disponent schon selbst eine IVENA-Zuweisung gemacht, gilt diese (wie bisher).
  • Mehrere Plätze: nur der Platz mit dem Einsatz steuert die Besatzung (keine doppelten SDS).
  • Krankentransporte (19222) bleiben wie bisher.
- 📨 SDS-Eingang in der Leitstellen-Übersicht (neueste oben, ungelesene markiert, „gelesen“,
  „leeren“); neue SDS erscheinen zusätzlich kurz als Hinweis. Im Einsatzverlauf steht die
  IVENA-Anmeldung bzw. „vor Ort versorgt“.

Version 5.14:
- KI-Anrufer entfernt: kein 🤖-Knopf mehr, kein API-Schlüssel, ein gespeicherter Schlüssel wird
  vom Gerät gelöscht. Es gibt nur noch den eingebauten Anrufer (kostenlos, im Gerät).
- 📼 Anruferprotokolle (Knopf in der Kopfleiste und im Übungsanruf): Jedes Übungsgespräch wird beim
  Auflegen gespeichert – Uhrzeit, Anrufer, Ort, Einsatz, Dauer, wer aufgelegt hat, das ganze
  Gespräch. Sortiert in Tages-Ordnern (Heute/Gestern/Datum). Löschen: einzeln, ganzer Tag, alle.
  Gespeichert nur auf diesem Gerät, höchstens 400 Gespräche (älteste fallen raus).
- 🧠 Lernliste: Alle 5 Minuten, nach jedem Gespräch und beim Öffnen werden die Protokolle
  durchgesehen. Jede Frage, auf die der Anrufer „weiß ich nicht“ / „wie bitte?“ gesagt hat, kommt
  in die Lernliste. Unpassende Antworten (z. B. „Welche Blutgruppe?“ → „Blut seh ich keins“) kannst
  du im Protokoll mit „✗ passt nicht“ selbst dazulegen.
  • Automatisch gelernt wird, wenn du direkt danach dieselbe Frage anders gestellt hast (mindestens
    ein gleiches Wort) und der Anrufer das dann verstanden hat – künftig versteht er beide Formen.
  • Sonst trägst du ein, was der Anrufer antworten soll („{er}“ wird zu er/sie), für alle Fälle oder
    nur für einen Fall-Typ. Deine Antworten haben Vorrang vor dem, was der Anrufer sonst sagen würde.
  • Zeigt an, wenn eine Frage mit dem heutigen Stand inzwischen verstanden wird.
  • Gelerntes ist löschbar und wird mit den anderen Plätzen geteilt.
- Fehler behoben (aus v5.07): „Wie heißt der Hausarzt?“ wurde als Anweisung „zum Hausarzt“
  verstanden. Fragen lösen keine Ratschlag-Bestätigung mehr aus.

Version 5.13:
- Übungsanrufer verstehen das Ende des Notrufs besser:
  • „Der RTW ist unterwegs, ca. 8 Minuten“ → wiederholt die Zeit („Acht Minuten, okay.“). Bei
    langer Anfahrt und ernster Lage wird er unruhig („Eine Viertelstunde?! Geht das nicht
    schneller?“). Versteht Zahlen, „Viertelstunde“, „halbe Stunde“, „ein paar Minuten“.
    Notarzt/Hubschrauber werden kommentiert. Bei Telefon-Fällen wundert er sich über den RTW.
  • Merkt sich die Zeit: Ist sie deutlich überschritten (Zeit + 1,5 min) und noch keiner da,
    meldet er sich („Die sind immer noch nicht da!“).
  • Hinweise bis zum Eintreffen, auch mehrere in einem Satz: Tür auf, Licht an, Hund wegsperren,
    Medikamente/Unterlagen bereitlegen, jemand an die Straße/winken, Auto wegfahren, beim
    Patienten bleiben, am Telefon bleiben. Die Antwort passt zur Lage (allein / jemand dabei /
    draußen / Passant, der den Patienten nicht kennt / Patient selbst).
  • Verabschieden („Ich lege jetzt auf, rufen Sie wieder an, wenn …“) → bedankt sich, legt nach
    ein paar Sekunden selbst auf. Während einer Reanimationsanleitung: „Bitte nicht auflegen!“
  • Weitere Fragen im selben Satz werden weiterhin beantwortet.

Version 5.12:
- Führende AAO: Der Notarzt-Teil der Lage bleibt erhalten. R1N1_Trauma schwer + führende „R2“
  → R2N1_Trauma schwer. Enthält das Stichwort der führenden AAO selbst schon ein N (z. B. R2N1),
  gilt dieses.

Version 5.11:
- AAO-Option „🎯 Führt das Stichwort“: Passt eine führende AAO, liefert sie den Anfang des
  Alarmstichworts (Teil vor dem „_“), der Rest kommt von der eigentlichen Lage.
  Beispiel: „Atemnot leicht“ (R1_Atemnot leicht) + führende AAO „2 Patienten“ (Stichwort R2)
  → R2_Atemnot leicht. Die Fahrzeuge der führenden AAO werden aufgefüllt (Maximalprinzip, nicht
  doppelt: 1 RTW + 2 RTW = 2 RTW). Führende AAOs konkurrieren nicht um das Stichwort; passen nur
  führende, gilt die normale Regel. Es führt immer nur eine (die mit den meisten Fahrzeugen).
  In der AAO-Liste mit „🎯 führt“ gekennzeichnet.

Version 5.10:
- Neue AAO-Bedingung „Anzahl Patienten (inkl. Angabe bei X)“: Zahl oder Vergleich (z. B. 2, >1,
  <=3). Zählt die Patientenzahl aus der Abfrage – auch wenn sie erst bei X geändert wurde (der
  höchste Wert aus Betroffene, Verletzte/gefährdet, Eingeklemmt, durch Feuer bedroht).
  Damit lässt sich z. B. „bei 2 Patienten 2 RTW“ selbst als AAO anlegen.

Version 5.09:
- Fehler behoben (aus v5.07): Auf iPad/iPhone blieb der Anrufer im Sprachmodus stumm. Seit der
  Disponent zuerst spricht, fehlte der erste Tipp, der die Sprachausgabe freischaltet. Sie wird
  jetzt beim Annehmen bzw. beim ersten Tipp freigeschaltet.
- Meldet sich die Leitstelle nach dem Annehmen ca. 10 Sekunden nicht, fragt der Anrufer
  „Hallo? Ist da jemand?“.
- Patientenzahl bei X (freiwillig): Über der X-Frage „👥 Patienten: 1 · 2 · 3 · mehr …“. Bei
  Medizinischer Notfall/Reanimation fällt die Anzahl in der Maske „Betroffene“ weg (Standard 1),
  bei anderen Lagen ist sie dort optional (leer = 1). Ab 4 → MANV wie bisher.
- Bei 2–3 Patienten werden nur X, A und B abgefragt – für alle gleichzeitig nebeneinander
  (mit „✓ unauffällig“ je Patient). Für Stichwort und AAO zählt jeweils der schwerste Wert;
  im Verlauf steht z. B. „Ja (P1: Nein · P2: Ja)“. C, D, E entfallen. „Zurück“ nimmt die XAB-
  Maske bzw. die geänderte Patientenzahl zurück.

Version 5.08:
- D (Bewusstsein) mit Mehrfachauswahl: Bewusstseinsgetrübt, Bewusstlos, Krampfanfall und
  Neurologisch auffällig antippen (mehrere möglich) und mit „✓ Weiter“ übernehmen. „Wach /
  orientiert“ und „Unklar“ gelten wie bisher sofort mit einem Tipp. Gespeichert wird z. B.
  „Bewusstseinsgetrübt; Krampfanfall“.
- AAO-Bedingungen auf D passen, wenn einer der gewählten Werte passt. Bei der Bewertung zählt
  der schwerste: Bewusstlos vor Krampfanfall/neurologisch vor Bewusstseinsgetrübt.
- „Notruf ändern“: D als Häkchen-Liste. „Zurück“ behält die gewählten D-Knöpfe.

Version 5.07:
- Du beginnst das Gespräch: Nach dem Annehmen sagt der Übungsanrufer nichts, bis du dich meldest
  (z. B. „Notruf Feuerwehr und Rettungsdienst, wo genau ist der Notfallort?“). Stellst du gleich
  eine Frage, antwortet er nach seinem ersten Satz direkt darauf. Gilt auch für Folgeanrufe.
- Neue Notrufe, die am Telefon erledigt werden: kleine Verbrennung, Nasenbluten, Wespenstich ohne
  Allergie, Rückenschmerzen, Fieber, Apotheke gesucht, Ruhestörung, piepender Rauchmelder,
  kleine Schnittwunde, Kind hat an Spülmaschinentablette geleckt, Hosentaschen-Anruf.
- Der Anrufer versteht Anweisungen und bestätigt sie konkret (kühlen, Kopf nach vorne/Nase
  zudrücken, Druck auf die Wunde, wieder anrufen wenn schlimmer, 116 117, 110, Apotheken-
  Notdienst, Giftnotruf, Batterie wechseln, Beine hoch, hinsetzen …). Hat er alles Nötige, bedankt
  er sich. Bei einer Kleinigkeit wundert er sich, wenn ein Rettungswagen kommen soll.
- Knopf „📞 Telefonisch erledigt“ (vor der Alarmierung): Ergebnis wählen (Beratung, an 116 117,
  an 110, Apotheke, Giftnotruf, Fehlanruf) – der Notruf wird ohne Fahrzeug abgeschlossen. Bei
  Übungsanrufen gibt es eine Rückmeldung, ob das passte oder welcher Rat noch fehlte.
- Anrufer halten sich an die AAO: Jeder Übungsfall wird vorab mit den Angaben des Anrufers durch
  die AAO geschickt. Fälle ohne passende AAO werden nicht angeboten. Nach der Alarmierung steht im
  Verlauf „🎓 Übungs-Check AAO“: was laut AAO zu alarmieren war und was fehlt oder zusätzlich kam.
  KI-Anrufer bekommen die AAO-Liste mit und erfinden nur passende Fälle.
- AAO-Seite: AAOs nach Themenfeldern (Rettungsdienst, Brand, Technische Hilfe/VU, Wasserrettung/
  Suche, MANV, Sonstige), innerhalb sortiert nach Stichwort. Jedes Themenfeld ist einklappbar
  (bleibt gemerkt), dazu „Alle auf-/einklappen“. Im AAO-Editor kann man das Themenfeld selbst
  festlegen (leer = automatisch).

Version 5.06:
- XABCDE überspringen: Über jeder XABCDE-Frage steht „Springen zu: A B C D E“. Ein Tipp auf einen
  späteren Buchstaben übernimmt alles dazwischen als unauffällig (X Nein, A Frei, B Normal,
  C Unauffällig, D Wach / orientiert) und springt direkt dorthin. „✓ Rest unauffällig“ übernimmt
  alle noch offenen Punkte inkl. E als unauffällig. Im Verlauf steht „⏭️ XABCDE übersprungen“;
  „Zurück“ nimmt den ganzen Sprung zurück.
