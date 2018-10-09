(function() {
    let translations = {
            'Passwords'                           : 'Wachtwoorden',
            'All'                                 : 'Alle',
            'Folders'                             : 'Mappen',
            'Recent'                              : 'Recent',
            'Favorites'                           : 'Favorieten',
            'Shared'                              : 'Gedeeld',
            'Tags'                                : 'Tags',
            'Security'                            : 'Beveiliging',
            'Trash'                               : 'Prullenbak',
            'Details'                             : 'Details',
            'Edit'                                : 'Bewerken',
            'Rename'                              : 'Hernoemen',
            'Delete'                              : 'Verwijderen',
            'Restore'                             : 'Terugzetten',
            'New Password'                        : 'Nieuw Wachtwoord',
            'New Folder'                          : 'Nieuwe Map',
            'New Tag'                             : 'Nieuwe Tag',
            'Secure'                              : 'Veilig',
            'Weak'                                : 'Onveilig',
            'Weak (Duplicate)'                    : 'Onveilig (Duplicaat)',
            'Weak (Outdated)'                     : 'Onveilig (Verouderd)',
            'Breached'                            : 'Gecompromiteerd',
            'Notes'                               : 'Notitie',
            'Share'                               : 'Delen',
            'Revisions'                           : 'Revisies',
            'QR Code'                             : 'QR Code',
            'Password'                            : 'Wachtwoord',
            'Username'                            : 'Gebruikersnaam',
            'Website'                             : 'Website',
            'Add Tags...'                         : 'Tags toevoegen...',
            'Color'                               : 'Kleur',
            'Name'                                : 'Naam',
            'Label'                               : 'Label',
            'General'                             : 'Algemeen',
            'Properties'                          : 'Eigenschappen',
            'Numbers'                             : 'Nummers',
            'Special Characters'                  : 'Speciale karakters',
            'More Options'                        : 'Meer Opties',
            'Favorite'                            : 'Favoriet',
            'Encryption'                          : 'Versleuteling',
            'On the server'                       : 'Op de Server',
            'Custom Fields'                       : 'Eigen Velden',
            'Secret'                              : 'Geheim',
            'File'                                : 'Bestand',
            'Value'                               : 'Waarde',
            'Toggle visibility'                   : 'Zichtbaarheid wisselen',
            'Generate password'                   : 'Wachtwoord genereren',
            'Simple Server Side Encryption V1'    : 'Simple Server Side Encryption V1',
            'Take some notes'                     : 'Maak aantekeningen',
            'Save'                                : 'Opslaan',
            'Create folder'                       : 'Map aanmaken',
            'Folder created'                      : 'Map Aangemaakt',
            'Creating folder failed'              : 'Map aanmaken mislukt',
            'Rename folder'                       : 'Map hernoemen',
            'Folder renamed'                      : 'Map hernoemd',
            'Renaming folder failed'              : 'Map hernoemen mislukt',
            'Folder moved'                        : 'Map verplaatst',
            'Moving folder failed'                : 'Map verplaatsen mislukt',
            'Delete folder'                       : 'Map verwijderen',
            'Do you want to delete the folder'    : 'Wilt u deze map verwijderen?',
            'Folder deleted'                      : 'Map verwijderd',
            'Deleting folder failed'              : 'Verwijderen van map mislukt',
            'Folder restored'                     : 'Map hersteld',
            'Restoring folder failed'             : 'Herstellen van map mistlukt',
            'Create tag'                          : 'Tag aanmaken',
            'Tag created'                         : 'Tag aangemaakt',
            'Creating tag failed'                 : 'Tag aanmaken mislukt',
            'Edit tag'                            : 'Tag bewerken',
            'Tag saved'                           : 'Tag opgeslagen',
            'Saving tag failed'                   : 'Opslaan van Tag mislukt',
            'Delete tag'                          : 'Tag verwijderen',
            'Do you want to delete the tag'       : 'Wilt u de Tag verwijderen?',
            'Tag deleted'                         : 'Tag verwijderd',
            'Deleting tag failed'                 : 'Verwijderen van Tag mislukt',
            'Tag restored'                        : 'Tag hersteld',
            'Restoring tag failed'                : 'Herstellen van Tag Mislukt',
            'Create password'                     : 'Nieuw Wachtwoord aanmaken',
            'Password created'                    : 'Wachtwoord aangemaakt',
            'Creating password failed'            : 'Wachtwoord aanmaken mislukt',
            'Edit password'                       : 'Wachtwoord bewerken',
            'Password saved'                      : 'Wachtwoord opgeslagen',
            'Saving password failed'              : 'Wachtwoord opslaan mislukt',
            'Password moved'                      : 'Wachtwoord verplaatst',
            'Moving password failed'              : 'Wachtwoord verplaatsen mislukt',
            'Delete password'                     : 'Wachtwoord verwijderen',
            'Do you want to delete the password'  : 'Wilt u het wachtwoord verwijderen?',
            'Password deleted'                    : 'Wachtwoord verwijderd',
            'Password restored'                   : 'Wachtwoord hersteld',
            'Restoring password failed'           : 'Wachtwoord herstellen mislukt',
            'Open Url'                            : 'Open URL',
            'Copy Url'                            : 'URL kopieren',
            'Copy User'                           : 'Gebruiker kopieren',
            'Copy Password'                       : 'Wachtwoord kopieren',
            '{element} was copied to clipboard'   : '{element} is naar het klembord gekopieerd',
            'Last modified on {date}'             : 'Laatst gewijzigd op {date}',
            'Restore revision'                    : 'Herstel revisie',
            'Revision restored'                   : 'Revisie hersteld',
            'Restoring revision failed'           : 'Herstellen van revisie mislukt',
            'Do you want to restore the revision?': 'Wilt u de revisie herstellen?',
            'Shared with me'                      : 'Met mij gedeeld',
            'Shared by me'                        : 'Door mij gedeeld',
            'Statistics'                          : 'Statistieken',
            'Created on'                          : 'Aangemaakt op',
            'Last updated'                        : 'Laatst geupdated',
            '{count} revisions'                   : '{count} revisies',
            'Shares'                              : 'Shares',
            '{count} shares'                      : '{count} keer gedeeld',
            'More'                                : 'Meer',
            'Backup and Restore'                  : 'Backup en Restore',
            'Browser Extension'                   : 'Browser Extensie',
            'Handbook'                            : 'Handboek',
            'Search user'                         : 'Gebruiker zoeken',
            'Set expiration date'                 : 'Stel verloopdatum in',
            'Expires {date}'                      : 'Verloopt op {date}',
            'Choose expiration date'              : 'Kies een verloopdatum of laat het veld leeg om oneindig lang te delen',
            'Please choose a date in the future'  : 'Kies een verloopdatum die in de toekomst ligt',
            'Invalid date'                        : 'Ongeldige datum',
            'The user {uid} does not exist'       : 'De gebruiker {uid} bestaat niet',
            'Unable to share password: {message}' : 'Kan wachtwoord niet delen: {message}',
            'Toggle write permissions'            : 'Schijfrechten omschakelen',
            'Toggle share permissions'            : 'Deelrechten omschakelen',
            'Stop sharing'                        : 'Delen beeindigen',
            'Date'                                : 'Datum',
            'Default Cache (0 files, 0 B)'        : 'Standaard Cache (0 Bestanden, 0 B)',
            'Avatars Cache (0 files, 0 B)'        : 'Avatar Cache (0 Bestanden, 0 B)',
            'Favicon Cache (0 files, 0 B)'        : 'Favicon Cache (0 Bestanden, 0 B)',
            'Preview Cache (0 files, 0 B)'        : 'Voorvertonings Cache (0 Bestanden, 0 B)',
            'Passwords Cache (0 files, 0 B)'      : 'Wachtwoord Cache (0 Bestanden, 0 B)',
            'Backup or export'                    : 'Backup of Exporteren',
            'Choose Format'                       : 'Kies Format',
            'Please choose'                       : 'Alstublieft kiezen',
            'Database Backup'                     : 'Database Backup',
            'Predefined CSV'                      : 'Voorgedefinieerde CSV',
            'Backup password'                     : 'Backup Wachtwoord',
            '(Optional) Encrypts the backup'      : '(Optional) Versleutel de backup met een wachtwoord dat minimaal 10 karakters lang is',
            'The import only supports CSV'        : 'De import ondersteund alleen CSV bestanden',
            'Export Passwords'                    : 'Wachtwoorden exporteren',
            'Export Folders'                      : 'Mappen exporteren',
            'Export Tags'                         : 'Tags exporteren',
            'FolderLabel'                         : 'Maplabel',
            'TagLabels'                           : 'Taglabels',
            'ParentLabel'                         : 'Bovenliggende map',
            'FolderId'                            : 'Map Id',
            'TagIds'                              : 'Tag Ids',
            'ParentId'                            : 'Bovenliggende map Id',
            'Empty'                               : 'Leeg',
            'Add Header Line'                     : 'Kopregel toevoegen',
            'Export passwords shared with me'     : 'Exporteer wachtwoorden die met mij gedeeld zijn',
            'Don\'t edit passwords shared with me': 'Geen wachtwoorden veranderen die met mij gedeeld zijn',
            'Run Export'                          : 'Export uitvoeren',
            'Export'                              : 'Exporteren',
            'Waiting...'                          : 'Loopt...',
            'Export error'                        : 'Export Fout',
            'Download {format}'                   : 'Download {format}',
            'Nothing to export'                   : 'Niks te exporteren',
            'There is no data to export'          : 'Er is geen data voorhanden om te exporteren',
            'Restore or import'                   : 'Restore of importeren',
            'Passwords CSV'                       : 'Wachtwoorden CSV',
            'Folder CSV'                          : 'Mappen CSV',
            'Custom CSV'                          : 'Overige CSV',
            'Select File'                         : 'Selecteer bestand',
            'Select Options'                      : 'Selecteer opties',
            'Conflict handling'                   : 'Conflict afhandeling',
            'Skip if same revision'               : 'Overslaan wanneer zelfde revisie',
            'Skip always'                         : 'Altijd overslaan',
            'Overwrite existing'                  : 'Bestaande overschrijven',
            'Merge with existing'                 : 'Samenvoegen met bestaande',
            'Create new entry'                    : 'Nieuw record aanmaken',
            'For encrypted backups'               : 'Verplicht bij versleutelde backups',
            'CSV Options'                         : 'CSV Opties',
            'Database'                            : 'Database',
            'Quote Character'                     : 'Aanhalingsteken',
            'Escape Character'                    : 'Escape karakter',
            'Field Delimiter'                     : 'Veldbegrenzer',
            'Quote'                               : 'Aanhalingsteken',
            'Single Quote'                        : 'Enkelvoudig aanhalingsteken',
            'Backslash'                           : 'Terugschrap',
            'Detect'                              : 'Detecteren',
            'Comma'                               : 'Komma',
            'Semicolon'                           : 'Puntkomma',
            'Space'                               : 'Spatie',
            'Tab'                                 : 'Tab',
            'Detect unescaped quotes'             : 'Detecteer niet ge-escapete aanhalingstekens',
            'Skip first line'                     : 'Eerste regel overslaan',
            'Interpolate missing fields'          : 'Ontbrekende velden interpoleren',
            'CSV Field Mapping'                   : 'CSV veld keuze volgorde',
            'Preview Line'                        : 'Regel voorvertonen',
            'Line {line}'                         : 'Regel {line}',
            'Ignore'                              : 'Negeren',
            'Changed'                             : 'Veranderd',
            'Modified'                            : 'Veranderd',
            'Edited'                              : 'Bewerkt op',
            'Created'                             : 'Aangemaakt op',
            'Folder'                              : 'Map',
            'Revision'                            : 'Revisie',
            'Url'                                 : 'URL',
            'Parent'                              : 'Bovenliggende',
            'Run Import'                          : 'Import uitvoeren',
            'Import'                              : 'Importeren',
            'Parsing input file'                  : 'Ivoerbestand doorvoeren',
            'Analyzing tags'                      : 'Analyseer Tags',
            'Analyzing folders'                   : 'Analyseer mappen',
            'Reading tags'                        : 'Bezig met lezen Tags',
            'Importing tags'                      : 'Bezig met importeren Tags',
            'Reading folders'                     : 'Bezig met lezen mappen',
            'Importing folders'                   : 'Bezig met importeren mappen',
            'Reading passwords'                   : 'Bezig met lezen wachtwoorden',
            'Importing passwords'                 : 'Bezig met importeren wachtwoorden',
            'Import failed'                       : 'Import mislukt',
            'Import partially failed'             : 'Import gedeeltelijk mislukt',
            'Import successful'                   : 'Import succesvol',
            'Import error'                        : 'Import fout',
            'Invalid file type "{type}"'          : 'Ongeldig bestandstype "{type}"',
            'Password required'                   : 'Wachtwoord benodigd',
            'Password invalid'                    : 'Ongeldig wachtwoord',
            'Failed to decrypt passwords'         : 'Ontsleutelen van wachtwoorden mislukt',
            'Failed to decrypt folders'           : 'Ontsleutelen van mappen mislukt',
            'Failed to decrypt tags'              : 'Ontleutelen van Tags mislukt',
            'CSV file can not be mapped'          : 'CSV bestand kan niet ingedeeld worden',
            'Delete All Items'                    : 'Alle items verwijderen',
            'Restore All Items'                   : 'Alle items restoren',
            'Restore Items'                       : 'Restore Items',
            'Restore all items in trash?'         : 'Alle items restoren in de prullenbak?',
            'Restore this item'                   : 'Dit item restoren',
            'Items restored'                      : 'Item restored',
            'Empty Trash'                         : 'Prullenbak legen',
            'Delete all items in trash?'          : 'Wilt u alle items in de prullenbak definitief verwijderen?',
            'Trash emptied'                       : 'Prullenbak geleegd',
            'Search'                              : 'Zoeken',
            'Use the search box to search'        : 'Gebruik het zoekvenster om te zoeken',
            'Search everywhere for "{query}"'     : 'Zoek overal naar "{query}"',
            'Settings'                            : 'Instellingen',
            'Password Rules'                      : 'Wachtwoord regels',
            'Mark duplicates'                     : 'Markeer duplicaten',
            'Maximum age in days'                 : 'Maximale leeftijd in dagen',
            'Password Generator'                  : 'Wachtwoord generator',
            'Password strength'                   : 'Wachtwoord sterkte',
            'Include numbers'                     : 'Cijfers gebruiken',
            'Include special characters'          : 'Bijzondere tekens gebruiken',
            'User Interface'                      : 'Gebruikersinterface',
            'Initial section'                     : 'Startpagina',
            'All Passwords'                       : 'Alle wachtwoorden',
            'Passwords List View'                 : 'Wachtwoorden in lijstweergave',
            'Set title from'                      : 'Dit veld als titel gebruiken',
            'Sort by'                             : 'Sorteer op',
            'Title field'                         : 'Titelveld',
            'Single click action'                 : 'Actie bij klik',
            'Double click action'                 : 'Actie bij dubbelklik',
            'Copy password'                       : 'Kopieer wachtwoord',
            'Copy username'                       : 'Kopieer gebruikersnaam',
            'Copy website'                        : 'Kopieer URL',
            'Show details'                        : 'Laat details zien',
            'Add copy options in menu'            : 'Voeg kopieer opties toe in menu',
            'Show username in list view'          : 'Laat gebruikersnaam zien in lijstweergave',
            'Show tags in list view'              : 'Laat Tags zien in lijstweergave',
            'Show hidden custom fields'           : 'Laat verborgen eigen velden zien',
            'Search as i type'                    : 'Zoek terwijl ik tik',
            'Search everywhere with Enter'        : 'Toets Enter om overal te zoeken',
            'Always show search section'          : 'Altijd de zoeksectie laten zien',
            'Notifications'                       : 'Berichtgeving',
            'Send Emails for'                     : 'Stuur E-Mails bij',
            'Security issues'                     : 'Beveiligingsproblemen',
            'Passwords shared with me'            : 'Met mij gedeelde wachtwoorden',
            'Show Notifications for'              : 'Laat notificaties zien bij',
            'Other errors'                        : 'Andere fouten',
            'Danger Zone'                         : 'Gevarenzone',
            'Reset all settings'                  : 'Alle instellingen resetten',
            'Reset'                               : 'Reset',
            'Delete everything'                   : 'Alles verwijderen',
            'DELETE EVERYTHING'                   : 'ALLES VERWIJDEREN',
            'Account reset requested'             : 'Account reset aangevraagd',
            'Field tests'                         : 'Veld tests',
            'Encryption support'                  : 'Client side Encryptie ondersteuning',
            'Test'                                : 'Test',
            'Test successful'                     : 'Test succesvol afgerond',
            'View'                                : 'Weergave',
            'Default'                             : 'Standaard',
            'Advanced'                            : 'Geavanceerd',
            'There is nothing here'               : 'Er is hier niets',
            'Click on "+" to add something'       : 'Klik op het "+" symbool om iets toe te voegen',
            'Deleted items will appear here'      : 'Verwijderde items verschijnen hier',
            'No passwords were shared with you'   : 'Er zijn geen wachtwoorden met u gedeeld',
            'You did not share any passwords'     : 'U heeft geen wachtwoorden gedeeld',
            'Your favorites will appear here'     : 'Uw favorieten verschijnen hier',
            'Better check the other sections'     : 'Mogenlijkerwijs heeft u nog geen wachtwoorden',
            'That\'s probably a good sign'        : 'Dat is een goed teken',
            'Go to {href}'                        : 'Ga naar {href}',
            'Figure {count}: {title}'             : 'AFbeelding {count}: {title}',
            'Unable to fetch page: {message}.'    : 'De pagina kan niet geladen worden: {message}.',
            'Not Found'                           : 'Pagina niet gevonden',
            'Missing something or found an error?': 'Mist u iets of heeft u een fout gevonden?',
            'Tell us!'                            : 'Meld het ons dan!',
            'Network error'                       : 'Netwerkfout',
            'Unable to load {module}'             : 'De module {module} kon niet geladen worden. Mogelijk is de verbinding met Nextcloud verbroken',
            'Sort by name'                        : 'Sorteer op naam',
            'Sort by modified date'               : 'Sorteer op datum gewijzigd',
            '{passwords} passwords'               : '{passwords} Wachtwoorden',
            '1 password'                          : '1 Wachtwoord',
            '{folders} folders'                   : '{folders} Mappen',
            '1 folder'                            : '1 Map',
            '{tags} tags'                         : '{tags} Tags',
            '1 tag'                               : '1 Tag',
            'Nothing'                             : 'Niets',
            ' and '                               : ' en ',
            'match'                               : 'overeenkomst',
            'matches'                             : 'Overeenkomsten',
            'true'                                : 'waar',
            'false'                               : 'niet waar',
            'yes'                                 : 'Ja',
            'no'                                  : 'nee'
        },
        helpTexts    = {
            'Mark passwords as weak if they are being used for multiple accounts'        : 'Markeer wachtwoorden als zwak wanneer ze gebruikt worden vor meerdere accounts',
            'Mark passwords as weak if they surpass the specified amount of days'        : 'Markeer wachtwoorden als zwak wanneer ze het aangegeven aantal dagen overschijden',
            'A higher strength results in longer, more complex passwords'                : 'Een hogere sterkte resulteert in langere en complexere wachtwoorden',
            'Show the selected property as title in the list view'                       : 'Laat de geselecteerde eigenschap als titel zien in lijstoverzicht',
            'Sorts passwords by the selected property when sorting by name is selected'  : 'Sorteert wachtwoorden op hun geselecteerde eigenschap wanneer sorteren op naam is geselecteerd',
            'Action to perform when clicking on a password in the list view'             : 'Actie die die bij een klik op het Wachtwoord wordt uitgevoerd',
            'Action to perform when double clicking on a password in the list view'      : 'Actie die bij een dubbelklik op een wachtwoord wordt uitgevoerd',
            'Shows options to copy the password and user name in the menu'               : 'Laat de opties om te kopieren van een wachtwoord en gebruikersnaam zien in het menu',
            'The initial section to be shown when the app is opened'                     : 'De initieele sectie die te zien is bij het openen van de APP',
            'Always show the username related to the password in the list view'          : 'Laat altijd de gebruiksnaam voor een wachtwoord in lijstoverzicht zien',
            'Show the tags for each password in the list view. Increases loading times'  : 'Laat de Tags voor elk wachtwoord zien in een lijstoverzicht. Dit verhoogt de laadtijd',
            'Show hidden custom fields in the edit form and detail section of a password': 'Laat de verborgen eigen velden en de details sectie van een wachtwoord zien in het bewerkformulier',
            'Sends you e-mails about compromised passwords and other security issues'    : 'Stuurt u E-Mails wanneer wachtwoorden gecompromiteerd zijn of wanneer er andere beveiligingsproblemen optreden',
            'Sends you e-mails when other people share passwords with you'               : 'Stuurt u E-Mails wanneer anderen wachtwoorden met u delen',
            'Start search when a key is pressed anywhere on the page'                    : 'Start de zoekopdracht zodra u een toets indrukt',
            'Search everywhere when the enter key is pressed in the search box'          : 'Zoekt overal wanneer de Enter toets in het zoekveld wordt ingedrukt',
            'Always show the section for global search in the navigation'                : 'Laat altijd de sectie voor globaal zoeken in de navigatie zien',
            'Notifies you about compromised passwords and other security issues'         : 'Waarschuwt u over gecompromiteerde wachtwoorden of andere beveiligingsproblemen',
            'Notifies you when other people share passwords with you'                    : 'Waarschuwt u wanneer anderen wachtwoorden met u delen',
            'Notifies you when a background operation fails'                             : 'Waarschuwt u wanneer er een achtergrondproces fout gaat',
            'Reset all settings on this page to their defaults'                          : 'Reset alle instellingen op deze pagina naar standaard waarden',
            'This will reset all settings to their defaults. Do you want to continue?'   : 'Dit zal alle instellingen resetten naar hun standaard waarden. Wilt u doorgaan?',
            'Start over and delete all configuration, passwords, folders and tags'       : 'Verwijder ale configuratie, wachtwoorden, mappen en Tags en begin overnieuw',
            'You have reached the maximum length of 4096 characters'                     : 'U heeft de maximumlengte van 4096 tekens bereikt',
            'Invalid trailing quote in quoted field'                                     : 'Ongeldig afsluitdend aanhalingsteken in geciteerd veld',
            'We could not find anything for "{query}"'                                   : 'We konden niets vinden voor "{query}"',
            'The file could not be parsed: {errors}'                                     : 'Het bestand kon niet verwerkt worden: {errors}',
            'You have to wait {seconds} seconds before you can reset your account.'      : 'U dient {seconds} seconden te wachten voordat uw gebruikersaccount gereset kan worden.',
            'The page "{page}" could not be fetched from the handbook server.'           : 'De pagina "{page}" kon niet opgehaald worden van de handleidingsserver.',
            'Some data is waiting to be synchronized'                                    : 'Er staat data gereed om gesynchroniseerd te worden',
            '{message} in line {line} character {character}.'                            : '{message} op regel {line}, Karakter {character}.',
            'Checks if your passwords, folders and tags can be encrypted without issues' : 'Controleert of uw wachtwoorden, mappen en tags zonder problemen versleuteld kunnen worden',
            'The client side encryption test completed successfully on this browser'     : 'De client side versleutelingstest is succesvol afgerond met deze browser'
        },
        longTexts    = {
            'The file has the type "{actual}" but "{expected}" is expected. You might have chosen the wrong file or importer.' : 'Het bestand heeft type "{actual}" maar "{expected}" wordt verwacht. Misschien heeft u een verkeerd bestand of verkeerde import methode gekozen..',
            'Do you want to delete all your settings, passwords, folders and tags?\nIt will NOT be possible to undo this.'     : 'Wilt u alle instellingen, wachtwoorden, mappen en Tags verwijderen?\nHet is niet mogelijk dit achteraf te herstellen.',
            '{service} is known to to generate faulty export files. Consult the manual for help if the file can not be parsed.': '{service} staat erom bekend dat het foutieve export bestanden genereerd. Raadpleeg de handleiding voor hulp wanneer het bestand niet verwerkt kan worden.'
        };

    OC.L10N.register(
        'passwords',
        Object.assign(translations, helpTexts, longTexts),
        'nplurals=2; plural=(n != 1);'
    );
}());
