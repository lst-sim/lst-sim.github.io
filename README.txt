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
