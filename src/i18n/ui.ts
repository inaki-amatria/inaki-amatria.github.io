import {defaultLang, type Lang} from './config.ts';

const ui:
    Record<Lang, Record<string, string>> = {
      es:
          {
            // CookieConsentIsland
            'CookieConsentIsland.title': 'Este sitio usa cookies',
            'CookieConsentIsland.subtitle':
                'Solo usamos cookies necesarias para recordar tus preferencias y para mostrar mapas interactivos si aceptas.',
            'CookieConsentIsland.moreInfo': 'Más información',
            'CookieConsentIsland.decline': 'Rechazar',
            'CookieConsentIsland.accept': 'Aceptar',

            // ManageCookiesIsland
            'ManageCookiesIsland.title': 'Gestionar cookies',

            // MapIsland
            'MapIsland.acceptedTitle': 'Mapa de Google Maps',
            'MapIsland.declinedTitle': 'Mapa desactivado',
            'MapIsland.declinedSubtitle':
                'Para ver el mapa interactivo acepta las cookies.',

            // ArticleLayout
            'ArticleLayout.backToNews': 'Volver a noticias',

            // Footer
            'Footer.index': 'Inicio',
            'Footer.regulations': 'Bases técnicas',
            'Footer.prizes': 'Premios',
            'Footer.players': 'Jugadores',
            'Footer.games': 'Partidas',
            'Footer.accommodation': 'Alojamiento',
            'Footer.pictures': 'Fotos',
            'Footer.news': 'Noticias',
            'Footer.contact': 'Contacto',
            'Footer.privacy': 'Privacidad',
            'Footer.cookies': 'Cookies',
            'Footer.navTitle': 'Navegación',
            'Footer.legalTitle': 'Legal',
            'Footer.followUsTitle': 'Síguenos',
            'Footer.TICP': 'Torneo Internacional Ciudad de Pontevedra',
            'Footer.allRightsReserved': 'Todos los derechos reservados',
            'Footer.developer': 'Diseño y desarrollo',

            // Layout
            'Layout.title': 'Torneo Internacional Ciudad de Pontevedra',
            'Layout.acronym': 'TICP',

            // NavbarIsland
            'NavbarIsland.index': 'Inicio',
            'NavbarIsland.regulations': 'Bases técnicas',
            'NavbarIsland.prizes': 'Premios',
            'NavbarIsland.players': 'Jugadores',
            'NavbarIsland.games': 'Partidas',
            'NavbarIsland.accommodation': 'Alojamiento',
            'NavbarIsland.pictures': 'Fotos',
            'NavbarIsland.news': 'Noticias',
            'NavbarIsland.contact': 'Contacto',
            'NavbarIsland.tournamentName': 'Torneo Internacional',
            'NavbarIsland.openMenu': 'Abrir menú',

            // PageNotFoundSection
            'PageNotFoundSection.title': 'Página no encontrada',
            'PageNotFoundSection.subtitle':
                'La página que buscas no existe o ha sido movida.',
            'PageNotFoundSection.gotoIndex': 'Volver al inicio',
            'PageNotFoundSection.gotoContact': 'Contacto',

            // AccommodationHeroSection
            'AccommodationHeroSection.imageAlt': 'Costa de las Rías Baixas',
            'AccommodationHeroSection.eyebrow': 'Tu estancia durante el torneo',
            'AccommodationHeroSection.title': 'Descubre las Rías Baixas',
            'AccommodationHeroSection.subtitle':
                'Ajedrez, costa y gastronomía en el corazón de Galicia.',

            // AccommodationSection
            'AccommodationSection.title': 'Alojamiento y destino',
            'AccommodationSection.p1':
                'Para tu estancia durante el torneo te recomendamos consultar plataformas como Booking o Airbnb, donde encontrarás una amplia oferta de alojamientos en Pontevedra y su entorno.',
            'AccommodationSection.p2':
                'Pontevedra ofrece opciones fantásticas, pero si dispones de vehículo te animamos a ampliar tu búsqueda y descubrir algunos de los pueblos costeros más emblemáticos de las Rías Baixas.',
            'AccommodationSection.p3':
                'Localidades como Poio, Combarro, Raxó, Sanxenxo o incluso Vigo se encuentran a poca distancia y te permitirán combinar el torneo con playa, gastronomía y paisajes únicos.',
            'AccommodationSection.p4':
                'Aprovecha el Torneo Internacional Ciudad de Pontevedra para vivir una experiencia completa: ajedrez de alto nivel y la magia del verano gallego.',
            'AccommodationSection.ctaRiasBaixas': 'Descubrir las Rías Baixas',
            'AccommodationSection.ctaGalicia': 'Turismo de Galicia',

            // TransportSection
            'TransportSection.title': 'Transporte',
            'TransportSection.bus': 'Autobús',
            'TransportSection.busDesc':
                'Conexiones directas desde diferentes puntos de Galicia.',
            'TransportSection.train': 'Tren',
            'TransportSection.trainDesc':
                'Estación de Pontevedra con servicios regionales y nacionales.',
            'TransportSection.car': 'Automóvil',
            'TransportSection.carDesc':
                'Aparcamientos gratuitos disponibles en el entorno del Pazo da Cultura de Pontevedra.',
            'TransportSection.taxi': 'Taxi',
            'TransportSection.taxiDesc':
                'Servicio 24 horas en la ciudad de Pontevedra.',

            // ByesSection
            'ByesSection.title': 'Byes',
            'ByesSection.p1':
                'Los jugadores podrán solicitar por escrito un máximo de tres byes de 0,5 puntos.',
            'ByesSection.p2':
                'Ningún bye será considerado oficial sin la confirmación expresa por parte de la organización.',
            'ByesSection.p3':
                'Los byes solicitados para las rondas 7, 8 y 9 serán de 0 puntos.',
            'ByesSection.p4':
                'Los jugadores invitados no podrán solicitar byes.',

            // CompetitionSystemSection
            'CompetitionSystemSection.round.1': '1ª',
            'CompetitionSystemSection.round.2': '2ª',
            'CompetitionSystemSection.round.3': '3ª',
            'CompetitionSystemSection.round.4': '4ª',
            'CompetitionSystemSection.round.5': '5ª',
            'CompetitionSystemSection.round.6': '6ª',
            'CompetitionSystemSection.round.7': '7ª',
            'CompetitionSystemSection.round.8': '8ª',
            'CompetitionSystemSection.round.9': '9ª',
            'CompetitionSystemSection.title': 'Sistema de competición',
            'CompetitionSystemSection.p1':
                'El torneo se disputará mediante sistema suizo a 9 rondas.',
            'CompetitionSystemSection.p2':
                'El calendario de juego se desarrollará entre los días 24 y 30 de julio de 2026, con jornadas dobles los días 25 y 27 de julio.',
            'CompetitionSystemSection.p3':
                'Los emparejamientos de cada ronda se harán públicos con la debida antelación y podrán consultarse en las siguientes plataformas oficiales:',
            'CompetitionSystemSection.and': 'y',
            'CompetitionSystemSection.p4':
                'Los resultados se publicarán tras la finalización de cada ronda y tendrán carácter oficial a efectos de clasificación y premios.',
            'CompetitionSystemSection.calendarTitle': 'Calendario del torneo',
            'CompetitionSystemSection.tableRound': 'Ronda',
            'CompetitionSystemSection.tableDate': 'Fecha',
            'CompetitionSystemSection.tableTime': 'Hora',
            'CompetitionSystemSection.doubleTag': 'Doble',
            'CompetitionSystemSection.delayNote':
                'Se permitirá una demora máxima de 45 minutos sobre la hora oficial de inicio de las partidas.',
            'CompetitionSystemSection.closingTitle': 'Ceremonia de clausura',
            'CompetitionSystemSection.closingP':
                'La ceremonia de clausura del torneo y la entrega de premios tendrán lugar el jueves 30 de julio a las 14:15.',

            'DataProtectionSection.title':
                'Protección de datos y derechos de imagen',
            'DataProtectionSection.lopdTitle':
                'Ley Orgánica de Protección de Datos (LOPD)',
            'DataProtectionSection.lopdP':
                'Los delegados de cada club y los jugadores inscritos autorizan a la organización del campeonato a la difusión de información o a la utilización de imágenes, así como del nombre del equipo y de sus jugadores en medios de comunicación, transmisiones, publicidades y memorias de la competición. Esta autorización se concede siempre que no represente un menoscabo de su honor o reputación, ni sea contraria a sus derechos, y siempre dentro del marco legal establecido en el Código Civil, la Ley de Enjuiciamiento Civil y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.',
            'DataProtectionSection.imageRightsTitle':
                'Cesión de derechos de imagen',
            'DataProtectionSection.imageRightsP1':
                'La inscripción en este torneo implica la aceptación de sus bases, así como la autorización expresa y voluntaria a la organización para utilizar de forma gratuita los vídeos, imágenes y/o grabaciones de sonido en los que intervenga el jugador, incluidos aquellos facilitados por el propio jugador.',
            'DataProtectionSection.imageRightsP2':
                'Esta autorización se concede con la finalidad de:',
            'DataProtectionSection.li1':
                'Publicar los materiales en la página web oficial del torneo y en las redes sociales de la organización.',
            'DataProtectionSection.li2':
                'Incluirlos en cualquier publicación impresa y/o digital destinada a aumentar la visibilidad y difusión de la actividad de la organización.',
            'DataProtectionSection.imageRightsP3':
                'La autorización abarca todos los usos posibles de los vídeos, imágenes y grabaciones de sonido en los que aparezca el jugador, utilizando los medios técnicos disponibles actualmente y los que pudieran desarrollarse en el futuro, salvo aquellos usos que puedan atentar contra el derecho al honor en los términos previstos en la Ley Orgánica 1/1982, de 5 de mayo, de Protección Civil del Derecho al Honor, a la Intimidad Personal y Familiar y a la Propia Imagen.',
            'DataProtectionSection.imageRightsP4':
                'La cesión de derechos no establece límite de tiempo para su concesión ni para su explotación, considerándose válida por un plazo ilimitado.',

            // FinalProvisionsSection
            'FinalProvisionsSection.title': 'Disposiciones finales',
            'FinalProvisionsSection.p1':
                'La participación en el torneo supone la aceptación íntegra del presente reglamento.',
            'FinalProvisionsSection.p2':
                'Cualquier caso no previsto expresamente en estas bases será resuelto por la organización y el árbitro principal, de acuerdo con la normativa FIDE y las buenas prácticas de competición.',
            'FinalProvisionsSection.p3':
                'La organización se reserva el derecho de modificar estas bases con el único requisito de su publicación en la página web oficial del evento.',

            // GeneralInformationSection
            'GeneralInformationSection.title': 'Información general',
            'GeneralInformationSection.p1':
                'El XIV Torneo Internacional Ciudad de Pontevedra se celebrará del 24 al 30 de julio de 2026, en la ciudad de Pontevedra (Galicia, España).',
            'GeneralInformationSection.p2':
                'El torneo está organizado por la Escola Xadrez Pontevedra, con la colaboración del Concello de Pontevedra, la Deputación de Pontevedra y la Universidade de Vigo, y se disputará en el Pabellón Deportivo Universitario, situado en el Campus Universitario de Pontevedra, a escasos minutos del centro histórico de la ciudad.',
            'GeneralInformationSection.p3':
                'Torneo oficial de la Federación Internacional de Ajedrez (FIDE), es válido para ELO FIDE, ELO FEDA y normas internacionales en el Grupo A (Máster), y se rige por las Leyes del Ajedrez de la FIDE vigentes en el momento de la competición.',
            'GeneralInformationSection.p4':
                'La participación en el torneo implica la aceptación íntegra del presente reglamento.',

            // GroupsAndCategoriesSection
            'GroupsAndCategoriesSection.title': 'Grupos y categorías',
            'GroupsAndCategoriesSection.p1':
                'El torneo se estructura en dos grupos de competición:',
            'GroupsAndCategoriesSection.groupA':
                'Grupo A (Máster): Abierto a todos los jugadores con licencia federativa en vigor, sin límite máximo de ELO FIDE. Contará con las siguientes categorías: general, sub-2300 FIDE, sub-2150 FIDE, veteranos (+60) y femenina.',
            'GroupsAndCategoriesSection.groupB':
                'Grupo B (Amateur): Abierto a todos los jugadores con licencia federativa en vigor y un ELO FIDE inferior a 2000 en los dos últimos listados publicados por la FIDE (junio y julio de 2026). Contará con las siguientes categorías: general, sub-1800 FIDE, sub-1600 FIDE, veteranos (+60), femenina y categorías por edad (sub-08, sub-10, sub-12, sub-14 y sub-16).',
            'GroupsAndCategoriesSection.p2':
                'No podrán participar en el Grupo B los jugadores que hayan superado los 2100 puntos de ELO FIDE en cualquier momento entre el 01/07/2025 y el 01/07/2026.',
            'GroupsAndCategoriesSection.p3':
                'La organización se reserva el derecho de reubicar a cualquier jugador en el grupo que considere adecuado en caso de discrepancia o irregularidad en el ELO declarado.',

            // PlayingRegulationsSection
            'PlayingRegulationsSection.title': 'Normativa de juego',
            'PlayingRegulationsSection.generalTitle': 'Normativa general',
            'PlayingRegulationsSection.generalP1':
                'El torneo se regirá por las Leyes del Ajedrez de la FIDE vigentes en el momento de su celebración, así como por las disposiciones específicas recogidas en el presente reglamento.',
            'PlayingRegulationsSection.generalP2':
                'La dirección del torneo contará con un equipo arbitral oficial, cuyas decisiones serán definitivas en todos los aspectos relacionados con la competición.',
            'PlayingRegulationsSection.generalP3':
                'Cualquier reclamación deberá formularse conforme a los procedimientos establecidos por la FIDE y dentro de los plazos que determine el equipo arbitral.',
            'PlayingRegulationsSection.generalP4':
                'Los casos no previstos expresamente en este reglamento serán resueltos por la organización y el árbitro principal, de acuerdo con la normativa federativa aplicable.',
            'PlayingRegulationsSection.appealTitle': 'Comité de apelación',
            'PlayingRegulationsSection.appealP1':
                'Durante la primera ronda del torneo se constituirá un comité de apelación.',
            'PlayingRegulationsSection.appealP2':
                'Toda reclamación deberá presentarse por escrito al árbitro dentro de los 30 minutos siguientes a la finalización de la ronda en la que se haya producido el hecho reclamado.',
            'PlayingRegulationsSection.appealP3': 'El jugador que presente una reclamación ante el comité de apelación deberá abonar una fianza de 80€, que será devuelta en caso de que la reclamación sea resuelta favorablemente.',
            'PlayingRegulationsSection.appealP4':
                'La decisión del comité de apelación no supondrá, en ningún caso, la modificación del resultado de la partida.',
            'PlayingRegulationsSection.antiCheatingTitle':
                'Medidas anti-trampas',
            'PlayingRegulationsSection.antiCheatingP':
                'Con el fin de garantizar la integridad y la equidad del torneo, se implementarán las siguientes medidas anti-trampas:',
            'PlayingRegulationsSection.antiCheatingLi1':
                'Prohibición estricta de dispositivos electrónicos: queda prohibido portar cualquier dispositivo electrónico en la sala de juego. La organización dispondrá de un área de custodia segura para el depósito de dichos dispositivos.',
            'PlayingRegulationsSection.antiCheatingLi2':
                'Controles aleatorios: se podrán realizar revisiones con detectores de metales, así como inspecciones al azar durante y después de las partidas.',
            'PlayingRegulationsSection.antiCheatingLi3':
                'Análisis tecnológico: las partidas podrán ser analizadas mediante software especializado para la detección de patrones de juego anómalos.',
            'PlayingRegulationsSection.antiCheatingLi4':
                'Supervisión adicional: se contará con personal especializado en la detección de comportamientos sospechosos dentro de la sala de juego.',
            'PlayingRegulationsSection.antiCheatingLi5':
                'Consecuencias: cualquier jugador sorprendido haciendo trampas será descalificado de forma inmediata y el hecho será comunicado a las autoridades ajedrecísticas correspondientes.',
            'PlayingRegulationsSection.conductTitle': 'Código de conducta',
            'PlayingRegulationsSection.conductP1':
                'Todos los participantes deberán mantener una conducta respetuosa hacia los árbitros, la organización y el resto de jugadores.',
            'PlayingRegulationsSection.conductP2':
                'Se prohíben los comentarios en voz alta durante las partidas. Cualquier actitud antideportiva podrá ser sancionada, incluida la expulsión del torneo.',
            'PlayingRegulationsSection.conductP3':
                'El uso de dispositivos electrónicos en la zona de juego está estrictamente prohibido.',

            // PontevedraSpecialRuleSection
            'PontevedraSpecialRuleSection.title': 'Regla especial Pontevedra',
            'PontevedraSpecialRuleSection.p1':
                'Como norma específica del torneo, y con el objetivo de fomentar el juego competitivo y el espectáculo deportivo:',
            'PontevedraSpecialRuleSection.li1':
                'En las 15 primeras mesas, las partidas deberán tener una duración mínima de 1 hora y un mínimo de 20 jugadas.',
            'PontevedraSpecialRuleSection.li2':
                'Los acuerdos de tablas que no cumplan estos requisitos no estarán permitidos, salvo autorización expresa del árbitro.',
            'PontevedraSpecialRuleSection.p2':
                'Esta norma será supervisada por el equipo arbitral.',

            // RegistrationSection
            'RegistrationSection.title': 'Inscripciones',
            'RegistrationSection.p1':
                'La inscripción en el torneo deberá realizarse a través de los canales oficiales habilitados por la organización:',
            'RegistrationSection.liEmail': 'Correo electrónico:',
            'RegistrationSection.liPhone': 'Teléfono de contacto: 650 645 318.',
            'RegistrationSection.p2':
                'En la solicitud de inscripción será obligatorio indicar los siguientes datos:',
            'RegistrationSection.data1': 'Nombre y apellidos.',
            'RegistrationSection.data2': 'DNI.',
            'RegistrationSection.data3': 'Fecha de nacimiento.',
            'RegistrationSection.data4': 'Código FIDE.',
            'RegistrationSection.data5': 'Grupo en el que desea participar.',
            'RegistrationSection.p3':
                'En caso de no especificar el grupo de participación, la organización se reserva el derecho de asignar al jugador al grupo que considere más adecuado.',
            'RegistrationSection.p4':
                'La inscripción solo se considerará definitiva una vez abonados los derechos de inscripción correspondientes.',
            'RegistrationSection.bankTitle': 'Datos bancarios:',
            'RegistrationSection.bankName': 'Banco: BBVA.',
            'RegistrationSection.bankBeneficiary':
                'Beneficiario: Escola Xadrez Pontevedra.',
            'RegistrationSection.bankIban':
                'IBAN: ES94 0182 5151 2702 0161 9025.',
            'RegistrationSection.feesTitle': 'Cuotas de inscripción',
            'RegistrationSection.fee1': '60€ — Categoría absoluta.',
            'RegistrationSection.fee2': '50€ — sub-16 y veteranos (+60).',
            'RegistrationSection.fee3':
                '40€ — Socios de la Escola Xadrez Pontevedra y miembros de la Comunidad de la Universidade de Vigo.',
            'RegistrationSection.p5':
                'Para jugadores con ELO FIDE inferior a 2000 inscritos en el Grupo A, se aplicarán las siguientes cuotas:',
            'RegistrationSection.tableElo': 'Tramo ELO FIDE',
            'RegistrationSection.tableFee': 'Cuota',
            'RegistrationSection.p6':
                'Estarán exentos del pago de la cuota de inscripción los jugadores con título de GM, MI o con ELO FIDE igual o superior a 2300.',
            'RegistrationSection.earlyBirdTitle': 'Inscripción anticipada',
            'RegistrationSection.earlyBirdP1':
                'Se aplicará un 20% de descuento sobre la cuota de inscripción a las inscripciones realizadas antes de las 14:00 del día 25 de junio.',
            'RegistrationSection.earlyBirdP2':
                'Para beneficiarse de esta promoción será necesario enviar el justificante de ingreso o transferencia bancaria.',
            'RegistrationSection.accreditationTitle': 'Acreditaciones',
            'RegistrationSection.accreditationP1':
                'El proceso de acreditación se realizará el día 24 de julio, en horario de 10:00 a 13:00.',
            'RegistrationSection.accreditationP2':
                'Todos los jugadores deberán acreditarse presencialmente en la sala de juego o mediante contacto telefónico o por correo electrónico.',
            'RegistrationSection.accreditationP3':
                'El jugador que no haya completado el proceso de acreditación no será emparejado en la primera ronda del torneo.',

            // TableOfContentsSection
            'TableOfContentsSection.mobileTitle': 'Bases técnicas',

            // TieBreaksSection
            'TieBreaksSection.title': 'Desempates',
            'TieBreaksSection.p1':
                'En caso de empate a puntos en la clasificación final, el orden se establecerá aplicando los sistemas de desempate oficiales, en el siguiente orden:',
            'TieBreaksSection.li1': 'Media del Buchholz de los rivales (AOB).',
            'TieBreaksSection.li2':
                'Buchholz-1 eliminando el valor más bajo (BH-C1).',
            'TieBreaksSection.li3': 'Buchholz total (BH).',
            'TieBreaksSection.li4': 'Encuentro directo (DE).',
            'TieBreaksSection.li5':
                'Media del desempeño de los oponentes (APRO).',
            'TieBreaksSection.p2':
                'Los sistemas de desempate aplicados serán publicados junto con las clasificaciones oficiales del torneo.',

            // TimeControlSection
            'TimeControlSection.title': 'Ritmo de juego',
            'TimeControlSection.p1':
                'El ritmo de juego del torneo será de 90 minutos por jugador, con un incremento de 30 segundos por jugada desde el primer movimiento.',
            'TimeControlSection.p2':
                'Este control de tiempo es oficial FIDE, por lo que todas las partidas disputadas serán válidas para la obtención de ELO FIDE y ELO FEDA, así como para la consecución de normas internacionales en el Grupo A, siempre que se cumplan los requisitos establecidos por la FIDE.',

            // bases.TitleSection
            'bases.TitleSection.title': 'Bases técnicas',
            'bases.TitleSection.p1':
                'Bases y normativa oficial del XIV Torneo Internacional Ciudad de Pontevedra.',

            // VenueSection
            'VenueSection.title': 'Local de juego',
            'VenueSection.p1':
                'El torneo se celebrará en el Pabellón Deportivo Universitario de Pontevedra, situado en el Campus Universitario de Pontevedra.',
            'VenueSection.p2':
                'La dirección es Rúa da Cruz Vermella, s/n, 36002 Pontevedra.',

            // ContactFormIsland
            'ContactFormIsland.name': 'Nombre',
            'ContactFormIsland.namePlaceholder': 'Tu nombre',
            'ContactFormIsland.subject': 'Asunto',
            'ContactFormIsland.subjectPlaceholder': 'Asunto',
            'ContactFormIsland.message': 'Mensaje',
            'ContactFormIsland.messagePlaceholder': 'Tu mensaje',
            'ContactFormIsland.submit': 'Enviar mensaje',
            'ContactFormIsland.info':
                'Al enviar el mensaje se abrirá una nueva pestaña con tu cliente de correo electrónico.',
            'ContactFormIsland.emailIntro': 'Hola, soy',
            'ContactFormIsland.emailOutro': '¡Un saludo! 😊',

            // ContactFormSection
            'ContactFormSection.callUs': 'Llámanos',
            'ContactFormSection.immediateAttention': 'Atención inmediata',
            'ContactFormSection.hours': 'Lunes a Viernes · 9:00 a 17:00',
            'ContactFormSection.visitUs': 'Visítanos',
            'ContactFormSection.visitUsP':
                'Nuestras instalaciones están abiertas para alumnos, socios y amantes del ajedrez.',
            'ContactFormSection.address': 'Plaza Fermín Bouza Brey, 2',
            'ContactFormSection.city': '36003 · Pontevedra',
            'ContactFormSection.viewMap': 'Ver mapa',
            'ContactFormSection.sendMessage': 'Envíanos un mensaje',

            // FindUsSection
            'FindUsSection.title': 'Dónde encontrarnos',
            'FindUsSection.p1':
                'Nuestra sede se encuentra en Pontevedra, en un espacio abierto a alumnos, socios y cualquier persona interesada en el ajedrez.',

            // contacto.TitleSection
            'contacto.TitleSection.title': 'Contacto',
            'contacto.TitleSection.p1':
                '¿Tienes alguna duda sobre el torneo? Elige la forma que prefieras para comunicarte con nosotros.',

            // CookiePolicySection
            'CookiePolicySection.title': 'Política de cookies',
            'CookiePolicySection.intro':
                'En cumplimiento de la Ley 34/2002 (LSSI-CE) y la Directiva Europea 2009/136/CE, te informamos del uso de cookies en este sitio web, titularidad de Escola Xadrez Pontevedra. Las cookies son pequeños archivos de texto que se descargan en tu dispositivo al navegar: son seguras, no pueden ejecutar código ni acceder a tu equipo, y sirven exclusivamente para recordar tus preferencias.',
            'CookiePolicySection.typesTitle': 'Cookies que utilizamos',
            'CookiePolicySection.typesP':
                'Este sitio web utiliza únicamente las cookies estrictamente necesarias para su funcionamiento y las generadas por Google Maps cuando aceptas su uso.',
            'CookiePolicySection.tableType': 'Tipo',
            'CookiePolicySection.tableName': 'Nombre',
            'CookiePolicySection.tableDuration': 'Duración',
            'CookiePolicySection.tablePurpose': 'Finalidad',
            'CookiePolicySection.own': 'Propia',
            'CookiePolicySection.thirdParty': 'Terceros',
            'CookiePolicySection.consentDuration': '180 días',
            'CookiePolicySection.consentPurpose':
                'Almacena tu preferencia sobre el uso de cookies.',
            'CookiePolicySection.mapsDuration': 'Sesión',
            'CookiePolicySection.mapsPurpose':
                'Necesarias para mostrar los mapas interactivos. Solo se activan si aceptas las cookies. Consulta la',
            'CookiePolicySection.googlePrivacy':
                'política de privacidad de Google',
            'CookiePolicySection.managementTitle': 'Gestión y bloqueo',
            'CookiePolicySection.managementP':
                'Puedes retirar tu consentimiento en cualquier momento haciendo clic en "Gestionar cookies" en el pie de página. También puedes configurar tu navegador para bloquear o eliminar cookies, aunque esto puede impedir la visualización de los mapas interactivos:',
            'CookiePolicySection.footerP':
                'Nos reservamos el derecho a actualizar esta política para adaptarla a cambios legislativos o técnicos. Para cualquier consulta puedes contactarnos en',

            // PhotoGallerySection
            'PhotoGallerySection.tournamentName': 'Torneo Internacional',
            'PhotoGallerySection.city': 'Ciudad de Pontevedra',
            'PhotoGallerySection.photos': 'fotos',
            'PhotoGallerySection.viewAlbum': 'Ver álbum',

            // fotos.TitleSection
            'fotos.TitleSection.title': 'Galería de fotos',
            'fotos.TitleSection.p1':
                'Revive los mejores momentos de las ediciones anteriores del torneo.',

            // SponsorCTASection
            'SponsorCTASection.text':
                '¿Tu empresa quiere impulsar el ajedrez internacional? Únete como colaborador del torneo.',
            'SponsorCTASection.button': 'Solicitar información',

            // SponsorSection
            'SponsorSection.title': 'Nuestros colaboradores',
            'SponsorSection.p1':
                'El respaldo institucional y técnico que garantiza la excelencia del torneo año tras año.',

            // TournamentHeroSection
            'TournamentHeroSection.alt':
                'Participantes del Torneo Internacional Ciudad de Pontevedra',
            'TournamentHeroSection.date': '24 — 30 de Julio, 2026',
            'TournamentHeroSection.title': 'XIV Torneo Internacional',
            'TournamentHeroSection.titleItalic': 'Ciudad de Pontevedra',
            'TournamentHeroSection.description':
                '9 rondas, 13.000€ en premios y ajedrez internacional en el corazón de las Rías Baixas.',
            'TournamentHeroSection.register': 'Inscribirme ahora',
            'TournamentHeroSection.rules': 'Ver bases técnicas',

            // TournamentOverviewSection
            'TournamentOverviewSection.title': 'Todo lo que necesitas saber',
            'TournamentOverviewSection.podiumAlt':
                'Podio del XIII Torneo Internacional Ciudad de Pontevedra',
            'TournamentOverviewSection.prize': '13.000€',
            'TournamentOverviewSection.prizesDescription':
                'Repartidos entre el Grupo A y el Grupo B, con reconocimientos especiales para mujeres, veteranos, categorías de base y la mejor partida de ataque del torneo.',
            'TournamentOverviewSection.viewPrizes': 'Ver desglose de premios',
            'TournamentOverviewSection.timeControl': 'Control de tiempo',
            'TournamentOverviewSection.timeValue': '90 min + 30 seg',
            'TournamentOverviewSection.timeDescription':
                'Ritmo oficial FIDE con incremento por jugada.',
            'TournamentOverviewSection.rounds': 'Rondas',
            'TournamentOverviewSection.roundsDescription':
                'Sistema Suizo. 24 — 30 de julio. Jornadas dobles el 25 y 27 de julio. Valedero para normas y ELO FIDE.',

            // PlayersIsland
            'PlayersIsland.groupA': 'Grupo A',
            'PlayersIsland.groupB': 'Grupo B',
            'PlayersIsland.rank': 'Nº',
            'PlayersIsland.title': 'Tít.',
            'PlayersIsland.name': 'Nombre',
            'PlayersIsland.elo': 'ELO',
            'PlayersIsland.fed': 'Fed.',
            'PlayersIsland.error':
                'No se ha podido cargar la lista de jugadores. Inténtalo más tarde.',
            'PlayersIsland.empty': 'No hay jugadores inscritos todavía.',

            // ResultServersSection
            'ResultServersSection.info64Desc':
                'Clasificación y resultados en tiempo real.',
            'ResultServersSection.chessResultsDesc':
                'Lista de inscritos y emparejamientos oficiales.',
            'ResultServersSection.viewRanking': 'Ver clasificación',

            // jugadores.TitleSection
            'jugadores.TitleSection.title': 'Jugadores inscritos',
            'jugadores.TitleSection.p1':
                'Consulta la lista de participantes inscritos en el torneo.',

            // ClosingXIIIEdition
            'cierre-xiii-edicion.title':
                'El XIII Torneo Ciudad de Pontevedra cierra con gran éxito de participación',
            'cierre-xiii-edicion.excerpt':
                'La decimotercera edición del torneo reunió a más de 250 jugadores de una veintena de países, consolidando Pontevedra como referente del ajedrez internacional en Galicia.',
            'cierre-xiii-edicion.h1': 'Un torneo de alto nivel',
            'cierre-xiii-edicion.p1':
                'El XIII Torneo Internacional Ciudad de Pontevedra cerró sus puertas con un balance extraordinario. Durante una semana, el Pabellón Deportivo Universitario de Pontevedra se convirtió en el epicentro del ajedrez internacional en Galicia, acogiendo a jugadores llegados desde más de veinte países.',
            'cierre-xiii-edicion.p2':
                'El nivel técnico de la competición fue notable, con la participación de Grandes Maestros y Maestros Internacionales. Las partidas del Grupo A ofrecieron ajedrez de altísima calidad, con luchas encarnizadas en las mesas de cabeza hasta la última ronda.',
            'cierre-xiii-edicion.p3':
                'El Grupo B también brilló con luz propia, con una nutrida participación de jugadores jóvenes y amateurs que demostraron que el ajedrez de base en Galicia goza de una salud excelente.',
            'cierre-xiii-edicion.h2': 'Ambiente inmejorable',
            'cierre-xiii-edicion.p4':
                'Más allá del tablero, el torneo volvió a ser una fiesta del ajedrez y de la amistad. Jugadores de todo el mundo aprovecharon su estancia para disfrutar de Pontevedra, su casco histórico y la incomparable gastronomía de las Rías Baixas.',
            'cierre-xiii-edicion.p5':
                'La organización recibió numerosos elogios por parte de los participantes, que destacaron tanto las condiciones de juego como el trato recibido. Una edición para el recuerdo.',
            'cierre-xiii-edicion.h3': 'Ya pensando en el XIV',
            'cierre-xiii-edicion.p6':
                'Con el éxito del XIII torneo todavía fresco, la Escola Xadrez Pontevedra ya trabaja en la próxima edición. El XIV Torneo Internacional Ciudad de Pontevedra se celebrará del 24 al 30 de julio de 2026, con 13.000€ en premios y las mismas ganas de hacer grande el ajedrez en Galicia.',
            'cierre-xiii-edicion.cta': '¡Inscríbete ya!',

            // PrizesXIVEdition
            'premios-xiv-edicion.title':
                'El XIV Torneo Ciudad de Pontevedra repartirá 13.000€ en premios',
            'premios-xiv-edicion.excerpt':
                'La nueva edición del torneo aumenta su dotación económica y consolida su posición como uno de los torneos con mayor premio en metálico de Galicia.',
            'premios-xiv-edicion.h1': 'Grupo A (Máster)',
            'premios-xiv-edicion.h2': 'Grupo B (Amateur)',
            'premios-xiv-edicion.h3': 'Premio Ramón Escudeiro Tilve',
            'premios-xiv-edicion.h4': '¿A qué esperas?',
            'premios-xiv-edicion.p1':
                'El XIV Torneo Internacional Ciudad de Pontevedra repartirá este año un total de 13.000€ en premios entre los participantes del Grupo A y el Grupo B. Una dotación que refleja el crecimiento y la ambición de un torneo que año tras año atrae a jugadores de todo el mundo.',
            'premios-xiv-edicion.p2':
                'El primer clasificado del Grupo A se llevará 2.000€, con premios hasta el decimoquinto puesto. Además, se reconocerán categorías especiales como la mejor jugadora femenina, el mejor veterano mayor de 60 años y los jugadores sub-2300 y sub-2150.',
            'premios-xiv-edicion.p3':
                'El Grupo B también cuenta con una generosa dotación, con 1.000€ para el primer clasificado y premios hasta el duodécimo puesto. Las categorías sub-1800, sub-1600, femenina, veteranos y las categorías de base también tendrán su reconocimiento.',
            'premios-xiv-edicion.p4':
                'Como cada año, se entregará el Premio Ramón Escudeiro Tilve a la mejor partida de ataque del torneo, dotado con 150€ y trofeo para ambos grupos.',
            'premios-xiv-edicion.p5':
                'Con 13.000€ en juego, 9 rondas de ajedrez de alto nivel y la magia del verano gallego de fondo, el XIV Torneo Ciudad de Pontevedra es una cita que no puedes perderte. Consulta el',
            'premios-xiv-edicion.p5b': 'e',
            'premios-xiv-edicion.p5c': 'antes de que se agoten las plazas.',
            'premios-xiv-edicion.cta1': 'desglose completo de premios',
            'premios-xiv-edicion.cta2': 'inscríbete ahora',

            // RegistrationOpen
            'inscripciones-abiertas.title':
                'Se abren las inscripciones del XIV Torneo Internacional Ciudad de Pontevedra',
            'inscripciones-abiertas.excerpt':
                'Ya están abiertas las inscripciones para la decimocuarta edición del torneo internacional más importante de Galicia, con 13.000€ en premios y 9 rondas de ajedrez de alto nivel.',
            'inscripciones-abiertas.h1': 'Grupos y categorías',
            'inscripciones-abiertas.h2': 'Cómo inscribirse',
            'inscripciones-abiertas.h3': 'Más información',
            'inscripciones-abiertas.p1':
                'Ya están abiertas las inscripciones para el XIV Torneo Internacional Ciudad de Pontevedra, que se celebrará del 24 al 30 de julio de 2026 en el Pabellón Deportivo Universitario de Pontevedra. Una nueva edición de uno de los torneos de ajedrez más importantes del noroeste peninsular.',
            'inscripciones-abiertas.p2':
                'El torneo se estructura en dos grupos de competición:',
            'inscripciones-abiertas.li1':
                'Grupo A (Máster): abierto a todos los jugadores con licencia federativa en vigor, sin límite de ELO. Válido para normas y ELO FIDE.',
            'inscripciones-abiertas.li2':
                'Grupo B (Amateur): para jugadores con ELO FIDE inferior a 2000. Con categorías especiales por edad, género y veteranos.',
            'inscripciones-abiertas.p3':
                'Las inscripciones se realizan a través del correo electrónico',
            'inscripciones-abiertas.p3b': 'o por teléfono en el',
            'inscripciones-abiertas.p4':
                'Las inscripciones realizadas antes de las 14:00 del 25 de junio tienen un 20% de descuento. No esperes al último momento.',
            'inscripciones-abiertas.p5': 'Consulta las',
            'inscripciones-abiertas.p5b':
                'para conocer todos los detalles sobre cuotas, categorías y normativa de juego.',
            'inscripciones-abiertas.cta': 'bases técnicas',

            // NewsSection
            'NewsSection.empty': 'No hay noticias publicadas todavía.',
            'NewsSection.latest': 'Última noticia',
            'NewsSection.readMore': 'Leer más',

            // noticias.TitleSection
            'noticias.TitleSection.title': 'Noticias',
            'noticias.TitleSection.p1':
                'Descubre las últimas novedades del torneo.',

            // ChessServersSection
            'ChessServersSection.chesscomDesc':
                'Seguimiento en directo con análisis de motor.',
            'ChessServersSection.lichessDesc':
                'Retransmisión oficial del torneo.',
            'ChessServersSection.chessbaseDesc':
                'Partidas en directo con tableros interactivos.',
            'ChessServersSection.viewGames': 'Ver partidas',

            // LiveBoardIsland
            'LiveBoardIsland.table': 'Mesa',
            'LiveBoardIsland.white': 'Blanco',
            'LiveBoardIsland.black': 'Negro',
            'LiveBoardIsland.viewLichess': 'Ver en Lichess',

            // LiveBoardsIsland
            'LiveBoardsIsland.round': 'Ronda',
            'LiveBoardsIsland.loadingRounds': 'Cargando rondas...',

            // partidas.TitleSection
            'partidas.TitleSection.title': 'Sigue el torneo en directo',
            'partidas.TitleSection.p1':
                'Sigue las partidas en tiempo real desde las principales plataformas de ajedrez online.',

            // PrizesCTASection
            'PrizesCTASection.text':
                '¿Listo para competir? 24 — 30 de julio de 2026 · Pabellón Deportivo Universitario, Pontevedra.',
            'PrizesCTASection.button': 'Inscribirme ahora',

            // PrizesDisclaimerSection
            'PrizesDisclaimerSection.text':
                'Todos los premios están sujetos a la legislación vigente. Los jugadores deberán facilitar un número de cuenta bancaria para el pago por transferencia. Los premios no son acumulables: en caso de optar a varios, se otorgará el de mayor valor.',

            // PrizesGroupASection
            'PrizesGroupASection.title': 'Grupo A',
            'PrizesGroupASection.1st': '1.er clasificado',
            'PrizesGroupASection.2nd': '2.do clasificado',
            'PrizesGroupASection.3rd': '3.er clasificado',
            'PrizesGroupASection.prize1': '2.000€',
            'PrizesGroupASection.prize2': '1.200€',
            'PrizesGroupASection.prize3': '800€',
            'PrizesGroupASection.prize150': '150€',
            'PrizesGroupASection.pos4': '4.º',
            'PrizesGroupASection.pos5': '5.º',
            'PrizesGroupASection.pos6': '6.º',
            'PrizesGroupASection.pos7': '7.º',
            'PrizesGroupASection.pos8': '8.º',
            'PrizesGroupASection.pos9': '9.º',
            'PrizesGroupASection.pos10': '10.º',
            'PrizesGroupASection.pos11': '11.º',
            'PrizesGroupASection.pos12': '12.º',
            'PrizesGroupASection.pos13': '13.º',
            'PrizesGroupASection.pos14': '14.º',
            'PrizesGroupASection.pos15': '15.º',
            'PrizesGroupASection.trophy': '+ Trofeo',
            'PrizesGroupASection.special': 'Premios especiales',
            'PrizesGroupASection.sub2300': '1.º Sub-2300',
            'PrizesGroupASection.sub2150': '1.º Sub-2150',
            'PrizesGroupASection.woman': 'Mejor clasificada femenina',
            'PrizesGroupASection.veteran': 'Mejor veterano',
            'PrizesGroupASection.trophyBook': 'Trofeo + Libro',

            // PrizesGroupBSection
            'PrizesGroupBSection.title': 'Grupo B',
            'PrizesGroupBSection.prize1': '1.000€',
            'PrizesGroupBSection.prize700': '700€',
            'PrizesGroupBSection.prize500': '500€',
            'PrizesGroupBSection.sub1800': '1.º Sub-1800',
            'PrizesGroupBSection.sub1600': '1.º Sub-1600',
            'PrizesGroupBSection.baseCategories':
                'Categorías de base (Sub-16 a Sub-08)',
            'PrizesGroupBSection.baseCategoriesDesc':
                'Material deportivo o didáctico para los dos primeros clasificados de cada categoría.',
            'PrizesGroupBSection.material': 'Material',

            // PrizesHeroSection
            'PrizesHeroSection.title': 'Más de',
            'PrizesHeroSection.amount': '13.000€',
            'PrizesHeroSection.subtitle': 'en premios',
            'PrizesHeroSection.p1':
                'Repartidos entre el Grupo A y el Grupo B, con reconocimientos especiales para mujeres, veteranos, categorías de base y la mejor partida de ataque del torneo.',
            'PrizesHeroSection.alt': 'Colección de trofeos de oro',

            // RamonEscudeiroSection
            'RamonEscudeiroSection.specialLabel': 'Premio especial',
            'RamonEscudeiroSection.title': 'Trofeo Ramón Escudeiro Tilve',
            'RamonEscudeiroSection.description': 'Premio a la mejor partida de ataque del torneo. La organización designará un jurado para la elección de la partida ganadora. Las partidas candidatas deberán presentarse a la dirección del torneo como máximo una hora tras la finalización de la ronda 8ª, reservándose la organización el derecho de nominar cualquier partida que reúna los requisitos. Asimismo, la organización podrá declarar desierto el premio conforme al criterio del jurado.',
            'RamonEscudeiroSection.grant': 'Dotación',
            'RamonEscudeiroSection.amount': '150€',

            // PrivacyPolicySection
            'PrivacyPolicySection.title': 'Política de privacidad',
            'PrivacyPolicySection.intro':
                'En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos sobre el tratamiento de tus datos personales en este sitio web, titularidad de Escola Xadrez Pontevedra (CIF G-94022498), asociación deportiva sin ánimo de lucro con domicilio en Pontevedra (36003), contactable en',
            'PrivacyPolicySection.whatDataTitle':
                'Qué datos tratamos y para qué',
            'PrivacyPolicySection.whatDataP1':
                'Este sitio web no almacena datos personales en ningún servidor. El formulario de contacto únicamente recoge nombre, asunto y mensaje para abrirlos en tu cliente de correo electrónico: eres tú quien decide si enviar o no el mensaje, y ningún dato queda registrado por nuestra parte.',
            'PrivacyPolicySection.whatDataP2':
                'No utilizamos herramientas de analítica web ni sistemas de seguimiento. Las únicas cookies presentes son las estrictamente necesarias para recordar tu preferencia sobre el uso de Google Maps, tal y como se detalla en nuestra',
            'PrivacyPolicySection.cookiesLink': 'política de cookies',
            'PrivacyPolicySection.whatDataP3':
                'No se realizan cesiones de datos a terceros ni transferencias internacionales, salvo las inherentes al uso de Google Maps si aceptas su activación.',
            'PrivacyPolicySection.rightsTitle': 'Tus derechos',
            'PrivacyPolicySection.rightsP1':
                'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos a',
            'PrivacyPolicySection.rightsP2':
                ', acreditando tu identidad. Si consideras que el tratamiento no se ajusta a la normativa vigente, puedes presentar una reclamación ante la',
            'PrivacyPolicySection.aepd':
                'Agencia Española de Protección de Datos',

            // alojamiento
            'alojamiento.title': 'Alojamiento',

            // bases
            'bases.title': 'Bases técnicas',
            'bases.section.general': 'Información general',
            'bases.section.venue': 'Local de juego',
            'bases.section.system': 'Sistema de competición',
            'bases.section.groups': 'Grupos y categorías',
            'bases.section.time': 'Ritmo de juego',
            'bases.section.byes': 'Byes',
            'bases.section.tiebreaks': 'Desempates',
            'bases.section.specialRule': 'Regla especial Pontevedra',
            'bases.section.regulations': 'Normativa de juego',
            'bases.section.registration': 'Inscripciones',
            'bases.section.data': 'Protección de datos y derechos de imagen',
            'bases.section.final': 'Disposiciones finales',

            // contacto
            'contacto.title': 'Contacto',

            // cookies
            'cookies.title': 'Cookies',

            // fotos
            'fotos.title': 'Fotos',

            // jugadores
            'jugadores.title': 'Jugadores',

            // noticias
            'noticias.title': 'Noticias',

            // partidas
            'partidas.title': 'Partidas',

            // premios
            'premios.title': 'Premios',

            // privacidad
            'privacidad.title': 'Privacidad',

            // 404
            '404.title': 'Página no encontrada',

          },
      en: {
        // CookieConsentIsland
        'CookieConsentIsland.title': 'This site uses cookies',
        'CookieConsentIsland.subtitle':
            'We only use necessary cookies to remember your preferences and to show interactive maps if you accept.',
        'CookieConsentIsland.moreInfo': 'More information',
        'CookieConsentIsland.decline': 'Decline',
        'CookieConsentIsland.accept': 'Accept',

        // ManageCookiesIsland
        'ManageCookiesIsland.title': 'Manage cookies',

        // MapIsland
        'MapIsland.acceptedTitle': 'Google Maps',
        'MapIsland.declinedTitle': 'Map disabled',
        'MapIsland.declinedSubtitle':
            'To view the interactive map please accept cookies.',

        // ArticleLayout
        'ArticleLayout.backToNews': 'Back to news',

        // Footer
        'Footer.index': 'Home',
        'Footer.regulations': 'Regulations',
        'Footer.prizes': 'Prizes',
        'Footer.players': 'Players',
        'Footer.games': 'Games',
        'Footer.accommodation': 'Accommodation',
        'Footer.pictures': 'Photos',
        'Footer.news': 'News',
        'Footer.contact': 'Contact',
        'Footer.privacy': 'Privacy',
        'Footer.cookies': 'Cookies',
        'Footer.navTitle': 'Navigation',
        'Footer.legalTitle': 'Legal',
        'Footer.followUsTitle': 'Follow us',
        'Footer.TICP': 'International Tournament Ciudad de Pontevedra',
        'Footer.allRightsReserved': 'All rights reserved',
        'Footer.developer': 'Design and development',

        // Layout
        'Layout.title': 'International Tournament Ciudad de Pontevedra',
        'Layout.acronym': 'ITCP',

        // NavbarIsland
        'NavbarIsland.index': 'Home',
        'NavbarIsland.regulations': 'Regulations',
        'NavbarIsland.prizes': 'Prizes',
        'NavbarIsland.players': 'Players',
        'NavbarIsland.games': 'Games',
        'NavbarIsland.accommodation': 'Accommodation',
        'NavbarIsland.pictures': 'Photos',
        'NavbarIsland.news': 'News',
        'NavbarIsland.contact': 'Contact',
        'NavbarIsland.tournamentName': 'International Tournament',
        'NavbarIsland.openMenu': 'Open menu',

        // PageNotFoundSection
        'PageNotFoundSection.title': 'Page not found',
        'PageNotFoundSection.subtitle':
            'The page you are looking for does not exist or has been moved.',
        'PageNotFoundSection.gotoIndex': 'Go to home',
        'PageNotFoundSection.gotoContact': 'Contact',

        // AccommodationHeroSection
        'AccommodationHeroSection.imageAlt': 'Coast of the Rías Baixas',
        'AccommodationHeroSection.eyebrow': 'Your stay during the tournament',
        'AccommodationHeroSection.title': 'Discover the Rías Baixas',
        'AccommodationHeroSection.subtitle':
            'Chess, coast and gastronomy in the heart of Galicia.',

        // AccommodationSection
        'AccommodationSection.title': 'Accommodation and destination',
        'AccommodationSection.p1':
            'For your stay during the tournament we recommend checking platforms like Booking or Airbnb, where you will find a wide range of accommodation in Pontevedra and the surrounding area.',
        'AccommodationSection.p2':
            'Pontevedra offers fantastic options, but if you have a vehicle we encourage you to broaden your search and discover some of the most iconic coastal towns of the Rías Baixas.',
        'AccommodationSection.p3':
            'Towns like Poio, Combarro, Raxó, Sanxenxo or even Vigo are just a short distance away and will let you combine the tournament with beaches, gastronomy and unique landscapes.',
        'AccommodationSection.p4':
            'Make the most of the International Tournament Ciudad de Pontevedra for a complete experience: high-level chess and the magic of a Galician summer.',
        'AccommodationSection.ctaRiasBaixas': 'Discover the Rías Baixas',
        'AccommodationSection.ctaGalicia': 'Galicia tourism',

        // TransportSection
        'TransportSection.title': 'Getting here',
        'TransportSection.bus': 'Bus',
        'TransportSection.busDesc':
            'Direct connections from different points in Galicia.',
        'TransportSection.train': 'Train',
        'TransportSection.trainDesc':
            'Pontevedra station with regional and national services.',
        'TransportSection.car': 'Car',
        'TransportSection.carDesc':
            'Free parking available around the Pazo da Cultura de Pontevedra.',
        'TransportSection.taxi': 'Taxi',
        'TransportSection.taxiDesc': '24-hour service in Pontevedra.',

        // ByesSection
        'ByesSection.title': 'Byes',
        'ByesSection.p1':
            'Players may request in writing a maximum of three half-point byes.',
        'ByesSection.p2':
            'No bye will be considered official without express confirmation from the organization.',
        'ByesSection.p3':
            'Byes requested for rounds 7, 8, and 9 will score 0 points.',
        'ByesSection.p4': 'Invited players may not request byes.',

        // CompetitionSystemSection
        'CompetitionSystemSection.round.1': '1st',
        'CompetitionSystemSection.round.2': '2nd',
        'CompetitionSystemSection.round.3': '3rd',
        'CompetitionSystemSection.round.4': '4th',
        'CompetitionSystemSection.round.5': '5th',
        'CompetitionSystemSection.round.6': '6th',
        'CompetitionSystemSection.round.7': '7th',
        'CompetitionSystemSection.round.8': '8th',
        'CompetitionSystemSection.round.9': '9th',
        'CompetitionSystemSection.title': 'Competition system',
        'CompetitionSystemSection.p1':
            'The tournament will be played using the Swiss system over 9 rounds.',
        'CompetitionSystemSection.p2':
            'The playing schedule runs from July 24 to 30, 2026, with double rounds on July 25 and 27.',
        'CompetitionSystemSection.p3':
            'Pairings for each round will be published in advance on the following official platforms:',
        'CompetitionSystemSection.and': 'and',
        'CompetitionSystemSection.p4':
            'Results will be published after the end of each round and will be official for standings and prize purposes.',
        'CompetitionSystemSection.calendarTitle': 'Tournament schedule',
        'CompetitionSystemSection.tableRound': 'Round',
        'CompetitionSystemSection.tableDate': 'Date',
        'CompetitionSystemSection.tableTime': 'Time',
        'CompetitionSystemSection.doubleTag': 'Double',
        'CompetitionSystemSection.delayNote':
            'A maximum delay of 45 minutes from the scheduled start time will be allowed.',
        'CompetitionSystemSection.closingTitle': 'Closing ceremony',
        'CompetitionSystemSection.closingP':
            'The closing ceremony and prize-giving will take place on Thursday, July 30 at 14:15.',

        // DataProtectionSection
        'DataProtectionSection.title': 'Data protection and image rights',
        'DataProtectionSection.lopdTitle':
            'Ley Orgánica de Protección de Datos (LOPD)',
        'DataProtectionSection.lopdP':
            'Club delegates and registered players authorize the championship organization to disseminate information or use images, as well as the team name and its players in media, broadcasts, advertisements, and competition reports. This authorization is granted as long as it does not represent a detriment to their honor or reputation, nor is it contrary to their rights, and always within the legal framework established in the Civil Code, the Civil Procedure Law, and Organic Law 3/2018, of December 5, on the Protection of Personal Data and guarantee of digital rights.',
        'DataProtectionSection.imageRightsTitle': 'Assignment of image rights',
        'DataProtectionSection.imageRightsP1':
            'Registration for this tournament implies acceptance of its rules, as well as the express and voluntary authorization to the organization to use free of charge the videos, images, and/or sound recordings in which the player participates, including those provided by the player themselves.',
        'DataProtectionSection.imageRightsP2':
            'This authorization is granted for the purpose of:',
        'DataProtectionSection.li1':
            'Publishing the materials on the official tournament website and on the organization\'s social media.',
        'DataProtectionSection.li2':
            'Including them in any printed and/or digital publication intended to increase the visibility and reach of the organization\'s activity.',
        'DataProtectionSection.imageRightsP3':
            'The authorization covers all possible uses of the videos, images, and sound recordings in which the player appears, using currently available technical means and those that may be developed in the future, except for those uses that may violate the right to honor under the terms provided in Organic Law 1/1982, of May 5, on Civil Protection of the Right to Honor, Personal and Family Privacy and Own Image.',
        'DataProtectionSection.imageRightsP4':
            'The assignment of rights does not establish a time limit for its granting or for its exploitation, being considered valid for an unlimited period.',

        // FinalProvisionsSection
        'FinalProvisionsSection.title': 'Final provisions',
        'FinalProvisionsSection.p1':
            'Participation in the tournament implies full acceptance of these regulations.',
        'FinalProvisionsSection.p2':
            'Any case not expressly covered by these rules will be resolved by the organization and the chief arbiter, in accordance with FIDE regulations and good competition practices.',
        'FinalProvisionsSection.p3':
            'The organization reserves the right to amend these rules, with the sole requirement of publishing the changes on the official event website.',

        // GeneralInformationSection
        'GeneralInformationSection.title': 'General information',
        'GeneralInformationSection.p1':
            'The XIV International Tournament Ciudad de Pontevedra will be held from July 24 to 30, 2026, in Pontevedra (Galicia, Spain).',
        'GeneralInformationSection.p2':
            'The tournament is organized by Escola Xadrez Pontevedra, with the support of Concello de Pontevedra, Deputación de Pontevedra, and Universidade de Vigo. It will be held at the University Sports Pavilion, on the Pontevedra University Campus, just minutes from the city\'s historic center.',
        'GeneralInformationSection.p3':
            'An official FIDE-rated event, it is valid for FIDE ELO, FEDA ELO, and international norms in Group A (Master), and is governed by the FIDE Laws of Chess in effect at the time of the competition.',
        'GeneralInformationSection.p4':
            'Participation in the tournament implies full acceptance of these regulations.',

        // GroupsAndCategoriesSection
        'GroupsAndCategoriesSection.title': 'Groups and categories',
        'GroupsAndCategoriesSection.p1':
            'The tournament is structured into two competition groups:',
        'GroupsAndCategoriesSection.groupA':
            'Group A (Master): Open to all players with a valid federation license, with no maximum FIDE rating. Categories: open, U-2300, U-2150, veterans (+60), and women.',
        'GroupsAndCategoriesSection.groupB':
            'Group B (Amateur): Open to all players with a valid federation license and a FIDE rating below 2000 in the last two FIDE lists (June and July 2026). Categories: open, U-1800, U-1600, veterans (+60), women, and age categories (U-08, U-10, U-12, U-14, and U-16).',
        'GroupsAndCategoriesSection.p2':
            'Players who have exceeded 2100 FIDE rating at any point between 01/07/2025 and 01/07/2026 may not play in Group B.',
        'GroupsAndCategoriesSection.p3':
            'The organization reserves the right to reassign any player to the appropriate group in case of discrepancy or irregularity in the declared rating.',

        // PlayingRegulationsSection
        'PlayingRegulationsSection.title': 'Playing regulations',
        'PlayingRegulationsSection.generalTitle': 'General regulations',
        'PlayingRegulationsSection.generalP1':
            'The tournament will be governed by the FIDE Laws of Chess in effect at the time of the event, as well as by the specific provisions included in these regulations.',
        'PlayingRegulationsSection.generalP2':
            'The tournament director will be supported by an official arbiters\' team, whose decisions will be final in all competition matters.',
        'PlayingRegulationsSection.generalP3':
            'Any appeal must be submitted in accordance with FIDE procedures and within the timeframes set by the arbiters\' team.',
        'PlayingRegulationsSection.generalP4':
            'Cases not expressly covered by these regulations will be resolved by the organization and the chief arbiter, in accordance with applicable federation rules.',
        'PlayingRegulationsSection.appealTitle': 'Appeals committee',
        'PlayingRegulationsSection.appealP1':
            'An appeals committee will be constituted during the first round of the tournament.',
        'PlayingRegulationsSection.appealP2':
            'Any appeal must be submitted in writing to the arbiter within 30 minutes of the end of the round in which the incident occurred.',
        'PlayingRegulationsSection.appealP3':
            'A player submitting an appeal must pay a deposit of 80€, which will be refunded if the appeal is upheld.',
        'PlayingRegulationsSection.appealP4':
            'The decision of the appeals committee will not, under any circumstances, result in the reversal of a game result.',
        'PlayingRegulationsSection.antiCheatingTitle': 'Anti-cheating measures',
        'PlayingRegulationsSection.antiCheatingP': 'To guarantee the integrity and fairness of the tournament, the following anti-cheating measures will be in place:',
        'PlayingRegulationsSection.antiCheatingLi1':
            'Strict ban on electronic devices: no electronic device may be brought into the playing hall. The organization will provide a secure storage area for such devices.',
        'PlayingRegulationsSection.antiCheatingLi2':
            'Random checks: metal detector scans and random inspections may be carried out during and after games.',
        'PlayingRegulationsSection.antiCheatingLi3':
            'Technological analysis: games may be analyzed using specialized software to detect anomalous playing patterns.',
        'PlayingRegulationsSection.antiCheatingLi4':
            'Additional supervision: dedicated staff will monitor the playing hall for suspicious behavior.',
        'PlayingRegulationsSection.antiCheatingLi5':
            'Consequences: any player caught cheating will be immediately disqualified and the incident reported to the relevant chess authorities.',
        'PlayingRegulationsSection.conductTitle': 'Code of conduct',
        'PlayingRegulationsSection.conductP1':
            'All participants must treat arbiters, the organization, and fellow players with respect.',
        'PlayingRegulationsSection.conductP2':
            'Talking aloud during games is not allowed. Unsportsmanlike behavior may be sanctioned, up to and including expulsion from the tournament.',
        'PlayingRegulationsSection.conductP3':
            'Electronic devices are strictly prohibited in the playing area.',

        // PontevedraSpecialRuleSection
        'PontevedraSpecialRuleSection.title': 'Pontevedra special rule',
        'PontevedraSpecialRuleSection.p1':
            'As a tournament-specific rule to encourage fighting chess and competitive play:',
        'PontevedraSpecialRuleSection.li1':
            'On the top 15 boards, games must last a minimum of 1 hour and include at least 20 moves.',
        'PontevedraSpecialRuleSection.li2':
            'Draw offers that do not meet these requirements will not be accepted, unless expressly authorized by the arbiter.',
        'PontevedraSpecialRuleSection.p2':
            'This rule will be enforced by the arbiters\' team.',

        // RegistrationSection
        'RegistrationSection.title': 'Registration',
        'RegistrationSection.p1':
            'Registration must be completed through the official channels provided by the organization:',
        'RegistrationSection.liEmail': 'Email:',
        'RegistrationSection.liPhone': 'Phone: 650 645 318.',
        'RegistrationSection.p2':
            'The following information is required at registration:',
        'RegistrationSection.data1': 'Full name.',
        'RegistrationSection.data2': 'ID/Passport.',
        'RegistrationSection.data3': 'Date of birth.',
        'RegistrationSection.data4': 'FIDE ID.',
        'RegistrationSection.data5': 'Preferred group.',
        'RegistrationSection.p3':
            'If no group is specified, the organization reserves the right to assign the player to the most appropriate group.',
        'RegistrationSection.p4':
            'Registration is only confirmed once the entry fee has been paid.',
        'RegistrationSection.bankTitle': 'Bank details:',
        'RegistrationSection.bankName': 'Bank: BBVA.',
        'RegistrationSection.bankBeneficiary':
            'Beneficiary: Escola Xadrez Pontevedra.',
        'RegistrationSection.bankIban': 'IBAN: ES94 0182 5151 2702 0161 9025.',
        'RegistrationSection.feesTitle': 'Entry fees',
        'RegistrationSection.fee1': '60€ — Open section.',
        'RegistrationSection.fee2': '50€ — U-16 and veterans (+60).',
        'RegistrationSection.fee3':
            '40€ — Members of Escola Xadrez Pontevedra and Universidade de Vigo community.',
        'RegistrationSection.p5':
            'For players with a FIDE rating below 2000 entering Group A, the following fees apply:',
        'RegistrationSection.tableElo': 'FIDE rating range',
        'RegistrationSection.tableFee': 'Fee',
        'RegistrationSection.p6':
            'Players holding the GM or IM title, or with a FIDE rating of 2300 or above, are exempt from the entry fee.',
        'RegistrationSection.earlyBirdTitle': 'Early bird discount',
        'RegistrationSection.earlyBirdP1':
            'A 20% discount applies to entries submitted before 14:00 on June 25.',
        'RegistrationSection.earlyBirdP2':
            'To claim the discount, proof of payment must be provided.',
        'RegistrationSection.accreditationTitle': 'Accreditation',
        'RegistrationSection.accreditationP1':
            'Accreditation will take place on July 24, from 10:00 to 13:00.',
        'RegistrationSection.accreditationP2':
            'All players must check in in person at the playing hall, or by phone or email.',
        'RegistrationSection.accreditationP3':
            'Players who have not completed accreditation will not be paired in round 1.',

        // TableOfContentsSection
        'TableOfContentsSection.mobileTitle': 'Regulations',

        // TieBreaksSection
        'TieBreaksSection.title': 'Tie-breaks',
        'TieBreaksSection.p1':
            'In the event of a tie in the final standings, the order will be determined by the following official tie-break systems, applied in order:',
        'TieBreaksSection.li1': 'Average Buchholz of opponents (AOB).',
        'TieBreaksSection.li2': 'Buchholz Cut-1 (BH-C1).',
        'TieBreaksSection.li3': 'Total Buchholz (BH).',
        'TieBreaksSection.li4': 'Direct encounter (DE).',
        'TieBreaksSection.li5': 'Average opponent performance rating (APRO).',
        'TieBreaksSection.p2':
            'The tie-break systems used will be published alongside the official tournament standings.',

        // TimeControlSection
        'TimeControlSection.title': 'Time control',
        'TimeControlSection.p1':
            'The time control is 90 minutes per player, with a 30-second increment per move from move 1.',
        'TimeControlSection.p2':
            'This is an official FIDE time control, so all games will be rated for FIDE ELO and FEDA ELO. Group A games also count towards international norms, provided FIDE requirements are met.',

        // bases.TitleSection
        'bases.TitleSection.title': 'Tournament regulations',
        'bases.TitleSection.p1':
            'Official rules and regulations of the XIV International Tournament Ciudad de Pontevedra.',

        // VenueSection
        'VenueSection.title': 'Venue',
        'VenueSection.p1':
            'The tournament will be held at the University Sports Pavilion of Pontevedra, on the Pontevedra University Campus.',
        'VenueSection.p2':
            'Address: Rúa da Cruz Vermella, s/n, 36002 Pontevedra.',

        // ContactFormIsland
        'ContactFormIsland.name': 'Name',
        'ContactFormIsland.namePlaceholder': 'Your name',
        'ContactFormIsland.subject': 'Subject',
        'ContactFormIsland.subjectPlaceholder': 'Subject',
        'ContactFormIsland.message': 'Message',
        'ContactFormIsland.messagePlaceholder': 'Your message',
        'ContactFormIsland.submit': 'Send message',
        'ContactFormIsland.info':
            'Sending the message will open a new tab with your email client.',
        'ContactFormIsland.emailIntro': 'Hi, I\'m',
        'ContactFormIsland.emailOutro': 'Cheers! 😊',

        // ContactFormSection
        'ContactFormSection.callUs': 'Call us',
        'ContactFormSection.immediateAttention': 'Fastest response',
        'ContactFormSection.hours': 'Monday to Friday · 9:00 to 17:00',
        'ContactFormSection.visitUs': 'Visit us',
        'ContactFormSection.visitUsP':
            'Our facilities are open to students, members, and chess lovers.',
        'ContactFormSection.address': 'Plaza Fermín Bouza Brey, 2',
        'ContactFormSection.city': '36003 · Pontevedra',
        'ContactFormSection.viewMap': 'View map',
        'ContactFormSection.sendMessage': 'Send us a message',

        // FindUsSection
        'FindUsSection.title': 'Where to find us',
        'FindUsSection.p1':
            'Our club is based in Pontevedra, in a space open to students, members, and anyone who loves chess.',

        // contacto.TitleSection
        'contacto.TitleSection.title': 'Contact',
        'contacto.TitleSection.p1':
            'Got a question about the tournament? Pick your preferred way to get in touch.',

        // CookiePolicySection
        'CookiePolicySection.title': 'Cookie policy',
        'CookiePolicySection.intro':
            'In compliance with Law 34/2002 (LSSI-CE) and European Directive 2009/136/CE, we inform you about the use of cookies on this website, owned by Escola Xadrez Pontevedra. Cookies are small text files downloaded to your device when you browse: they are safe, cannot execute code or access your device, and are used solely to remember your preferences.',
        'CookiePolicySection.typesTitle': 'Cookies we use',
        'CookiePolicySection.typesP':
            'This website uses only the cookies strictly necessary for its operation and those generated by Google Maps when you accept their use.',
        'CookiePolicySection.tableType': 'Type',
        'CookiePolicySection.tableName': 'Name',
        'CookiePolicySection.tableDuration': 'Duration',
        'CookiePolicySection.tablePurpose': 'Purpose',
        'CookiePolicySection.own': 'First-party',
        'CookiePolicySection.thirdParty': 'Third-party',
        'CookiePolicySection.consentDuration': '180 days',
        'CookiePolicySection.consentPurpose': 'Stores your cookie preference.',
        'CookiePolicySection.mapsDuration': 'Session',
        'CookiePolicySection.mapsPurpose':
            'Required to display interactive maps. Only activated if you accept cookies. See the',
        'CookiePolicySection.googlePrivacy': 'Google privacy policy',
        'CookiePolicySection.managementTitle': 'Managing cookies',
        'CookiePolicySection.managementP':
            'You can withdraw your consent at any time by clicking "Manage cookies" in the footer. You can also configure your browser to block or delete cookies, though this may prevent interactive maps from loading:',
        'CookiePolicySection.footerP':
            'We reserve the right to update this policy to reflect legislative or technical changes. For any questions, reach us at',

        // PhotoGallerySection
        'PhotoGallerySection.tournamentName': 'International Tournament',
        'PhotoGallerySection.city': 'Ciudad de Pontevedra',
        'PhotoGallerySection.photos': 'photos',
        'PhotoGallerySection.viewAlbum': 'View album',

        // fotos.TitleSection
        'fotos.TitleSection.title': 'Photo gallery',
        'fotos.TitleSection.p1':
            'Relive the best moments from previous editions of the tournament.',

        // SponsorCTASection
        'SponsorCTASection.text':
            'Want to support international chess? Join the tournament as a partner.',
        'SponsorCTASection.button': 'Get in touch',

        // SponsorSection
        'SponsorSection.title': 'Our partners',
        'SponsorSection.p1':
            'The institutional and technical support that keeps the tournament at the highest level year after year.',

        // TournamentHeroSection
        'TournamentHeroSection.alt':
            'Players at the International Tournament Ciudad de Pontevedra',
        'TournamentHeroSection.date': 'July 24 — 30, 2026',
        'TournamentHeroSection.title': 'XIV International Tournament',
        'TournamentHeroSection.titleItalic': 'Ciudad de Pontevedra',
        'TournamentHeroSection.description':
            '9 rounds, 13,000€ in prizes and international chess in the heart of the Rías Baixas.',
        'TournamentHeroSection.register': 'Register now',
        'TournamentHeroSection.rules': 'View regulations',

        // TournamentOverviewSection
        'TournamentOverviewSection.title': 'Everything you need to know',
        'TournamentOverviewSection.podiumAlt':
            'Podium of the XIII International Tournament Ciudad de Pontevedra',
        'TournamentOverviewSection.prize': '13,000€',
        'TournamentOverviewSection.prizesDescription':
            'Distributed between Group A and Group B, with special recognition for women, veterans, youth categories, and the best attacking game of the tournament.',
        'TournamentOverviewSection.viewPrizes': 'View prize breakdown',
        'TournamentOverviewSection.timeControl': 'Time control',
        'TournamentOverviewSection.timeValue': '90 min + 30 sec',
        'TournamentOverviewSection.timeDescription':
            'Official FIDE time control with increment per move.',
        'TournamentOverviewSection.rounds': 'Rounds',
        'TournamentOverviewSection.roundsDescription':
            'Swiss System. July 24 — 30. Double rounds on July 25 and 27. Rated for norms and FIDE ELO.',

        // PlayersIsland
        'PlayersIsland.groupA': 'Group A',
        'PlayersIsland.groupB': 'Group B',
        'PlayersIsland.rank': 'No.',
        'PlayersIsland.title': 'Tit.',
        'PlayersIsland.name': 'Name',
        'PlayersIsland.elo': 'ELO',
        'PlayersIsland.fed': 'Fed.',
        'PlayersIsland.error':
            'Could not load the player list. Please try again later.',
        'PlayersIsland.empty': 'No players registered yet.',

        // ResultServersSection
        'ResultServersSection.info64Desc': 'Live standings and results.',
        'ResultServersSection.chessResultsDesc':
            'Player list and official pairings.',
        'ResultServersSection.viewRanking': 'View standings',

        // jugadores.TitleSection
        'jugadores.TitleSection.title': 'Registered players',
        'jugadores.TitleSection.p1':
            'Check the list of players registered for the tournament.',

        // ClosingXIIIEdition
        'cierre-xiii-edicion.title':
            'The XIII International Tournament Ciudad de Pontevedra closes to great success',
        'cierre-xiii-edicion.excerpt':
            'The thirteenth edition of the tournament brought together over 250 players from twenty countries, cementing Pontevedra\'s reputation as a hub for international chess in Galicia.',
        'cierre-xiii-edicion.h1': 'A high-level tournament',
        'cierre-xiii-edicion.p1':
            'The XIII International Tournament Ciudad de Pontevedra has wrapped up with outstanding results. For a whole week, the Pontevedra University Sports Pavilion became the epicenter of international chess in Galicia, welcoming players from over twenty countries.',
        'cierre-xiii-edicion.p2':
            'The level of play was remarkable, with Grandmasters and International Masters in the field. Group A produced high-quality chess throughout, with fierce battles at the top boards all the way to the final round.',
        'cierre-xiii-edicion.p3':
            'Group B was just as exciting, with a strong turnout of young and amateur players who showed that grassroots chess in Galicia is in great shape.',
        'cierre-xiii-edicion.h2': 'Great atmosphere all around',
        'cierre-xiii-edicion.p4':
            'Away from the board, the tournament was once again a celebration of chess and friendship. Players from all over the world made the most of their stay to explore Pontevedra, its historic center, and the outstanding gastronomy of the Rías Baixas.',
        'cierre-xiii-edicion.p5':
            'The organization received plenty of praise from participants, who highlighted both the playing conditions and the warm welcome. An edition to remember.',
        'cierre-xiii-edicion.h3': 'Already thinking about the XIV',
        'cierre-xiii-edicion.p6':
            'With the success of the XIII tournament still fresh, Escola Xadrez Pontevedra is already working on the next edition. The XIV International Tournament Ciudad de Pontevedra will be held from July 24 to 30, 2026, with 13,000€ in prizes and the same drive to make chess great in Galicia.',
        'cierre-xiii-edicion.cta': 'Register now!',

        // PrizesXIVEdition
        'premios-xiv-edicion.title':
            'The XIV International Tournament Ciudad de Pontevedra will award 13,000€ in prizes',
        'premios-xiv-edicion.excerpt':
            'The new edition raises its prize fund and cements its place as one of the richest chess tournaments in Galicia.',
        'premios-xiv-edicion.h1': 'Group A (Master)',
        'premios-xiv-edicion.h2': 'Group B (Amateur)',
        'premios-xiv-edicion.h3': 'Ramón Escudeiro Tilve Trophy',
        'premios-xiv-edicion.h4': 'What are you waiting for?',
        'premios-xiv-edicion.p1':
            'The XIV International Tournament Ciudad de Pontevedra will award a total of 13,000€ in prizes across Group A and Group B — a prize fund that reflects the growth and ambition of a tournament that draws players from around the world year after year.',
        'premios-xiv-edicion.p2':
            'The Group A winner takes home 2,000€, with prizes down to 15th place. Special recognition will also go to the best female player, the best veteran over 60, and the top U-2300 and U-2150 finishers.',
        'premios-xiv-edicion.p3':
            'Group B features a generous prize pool too, with 1,000€ for the winner and prizes down to 12th place. U-1800, U-1600, female, veteran, and youth categories will all receive recognition.',
        'premios-xiv-edicion.p4':
            'As every year, the Ramón Escudeiro Tilve Trophy will be awarded for the best attacking game of the tournament, with a 150€ prize and trophy for both groups.',
        'premios-xiv-edicion.p5':
            'With 13,000€ on the line, 9 rounds of top-level chess, and the magic of the Galician summer as a backdrop, the XIV International Tournament Ciudad de Pontevedra is not to be missed. Check the',
        'premios-xiv-edicion.p5b': 'and',
        'premios-xiv-edicion.p5c': 'before spots fill up.',
        'premios-xiv-edicion.cta1': 'full prize breakdown',
        'premios-xiv-edicion.cta2': 'register now',

        // RegistrationOpen
        'inscripciones-abiertas.title':
            'Registration is now open for the XIV International Tournament Ciudad de Pontevedra',
        'inscripciones-abiertas.excerpt':
            'Registration is open for the fourteenth edition of Galicia\'s biggest International Tournament — 13,000€ in prizes and 9 rounds of top-level chess await.',
        'inscripciones-abiertas.h1': 'Groups and categories',
        'inscripciones-abiertas.h2': 'How to register',
        'inscripciones-abiertas.h3': 'More information',
        'inscripciones-abiertas.p1':
            'Registration is now open for the XIV International Tournament Ciudad de Pontevedra, taking place from July 24 to 30, 2026, at the Pontevedra University Sports Pavilion. Another edition of one of the most prestigious chess tournaments in northwestern Spain.',
        'inscripciones-abiertas.p2':
            'The tournament is structured into two competition groups:',
        'inscripciones-abiertas.li1':
            'Group A (Master): open to all players with a valid federation license, with no rating limit. Rated for FIDE norms and FIDE ELO.',
        'inscripciones-abiertas.li2':
            'Group B (Amateur): for players with a FIDE rating under 2000. Featuring special categories for age, gender, and veterans (+60).',
        'inscripciones-abiertas.p3': 'Register by email at',
        'inscripciones-abiertas.p3b': 'or by phone at',
        'inscripciones-abiertas.p4':
            'Entries before 14:00 on June 25 get a 20% discount. Don\'t leave it to the last minute!',
        'inscripciones-abiertas.p5': 'Check the',
        'inscripciones-abiertas.p5b':
            'for full details on fees, categories, and playing regulations.',
        'inscripciones-abiertas.cta': 'tournament regulations',

        // NewsSection
        'NewsSection.empty': 'No news published yet.',
        'NewsSection.latest': 'Latest news',
        'NewsSection.readMore': 'Read more',

        // noticias.TitleSection
        'noticias.TitleSection.title': 'News',
        'noticias.TitleSection.p1': 'The latest updates from the tournament.',

        // ChessServersSection
        'ChessServersSection.chesscomDesc':
            'Live coverage with engine analysis.',
        'ChessServersSection.lichessDesc': 'Official tournament broadcast.',
        'ChessServersSection.chessbaseDesc':
            'Live games with interactive boards.',
        'ChessServersSection.viewGames': 'View games',

        // LiveBoardIsland
        'LiveBoardIsland.table': 'Board',
        'LiveBoardIsland.white': 'White',
        'LiveBoardIsland.black': 'Black',
        'LiveBoardIsland.viewLichess': 'Watch on Lichess',

        // LiveBoardsIsland
        'LiveBoardsIsland.round': 'Round',
        'LiveBoardsIsland.loadingRounds': 'Loading rounds...',

        // partidas.TitleSection
        'partidas.TitleSection.title': 'Follow the tournament live',
        'partidas.TitleSection.p1':
            'Watch the games in real time on the leading online chess platforms.',

        // PrizesCTASection
        'PrizesCTASection.text':
            'Ready to play? July 24 — 30, 2026 · University Sports Pavilion, Pontevedra.',
        'PrizesCTASection.button': 'Register now',

        // PrizesDisclaimerSection
        'PrizesDisclaimerSection.text':
            'All prizes are subject to current legislation. Players must provide a bank account number for payment by transfer. Prizes are not cumulative: if a player qualifies for more than one, the highest-value prize will be awarded.',

        // PrizesGroupASection
        'PrizesGroupASection.title': 'Group A',
        'PrizesGroupASection.1st': '1st place',
        'PrizesGroupASection.2nd': '2nd place',
        'PrizesGroupASection.3rd': '3rd place',
        'PrizesGroupASection.prize1': '2,000€',
        'PrizesGroupASection.prize2': '1,200€',
        'PrizesGroupASection.prize3': '800€',
        'PrizesGroupASection.prize150': '150€',
        'PrizesGroupASection.pos4': '4th',
        'PrizesGroupASection.pos5': '5th',
        'PrizesGroupASection.pos6': '6th',
        'PrizesGroupASection.pos7': '7th',
        'PrizesGroupASection.pos8': '8th',
        'PrizesGroupASection.pos9': '9th',
        'PrizesGroupASection.pos10': '10th',
        'PrizesGroupASection.pos11': '11th',
        'PrizesGroupASection.pos12': '12th',
        'PrizesGroupASection.pos13': '13th',
        'PrizesGroupASection.pos14': '14th',
        'PrizesGroupASection.pos15': '15th',
        'PrizesGroupASection.trophy': '+ Trophy',
        'PrizesGroupASection.special': 'Special prizes',
        'PrizesGroupASection.sub2300': '1st U-2300',
        'PrizesGroupASection.sub2150': '1st U-2150',
        'PrizesGroupASection.woman': 'Best female player',
        'PrizesGroupASection.veteran': 'Best veteran',
        'PrizesGroupASection.trophyBook': 'Trophy + Book',

        // PrizesGroupBSection
        'PrizesGroupBSection.title': 'Group B',
        'PrizesGroupBSection.prize1': '1,000€',
        'PrizesGroupBSection.prize700': '700€',
        'PrizesGroupBSection.prize500': '500€',
        'PrizesGroupBSection.sub1800': '1st U-1800',
        'PrizesGroupBSection.sub1600': '1st U-1600',
        'PrizesGroupBSection.baseCategories': 'Youth categories (U-16 to U-08)',
        'PrizesGroupBSection.baseCategoriesDesc':
            'Sports or educational material for the top two finishers in each category.',
        'PrizesGroupBSection.material': 'Material',

        // PrizesHeroSection
        'PrizesHeroSection.title': 'More than',
        'PrizesHeroSection.amount': '13,000€',
        'PrizesHeroSection.subtitle': 'in prizes',
        'PrizesHeroSection.p1':
            'Distributed between Group A and Group B, with special recognition for women, veterans, youth categories, and the best attacking game of the tournament.',
        'PrizesHeroSection.alt': 'Collection of gold trophies',

        // RamonEscudeiroSection
        'RamonEscudeiroSection.specialLabel': 'Special prize',
        'RamonEscudeiroSection.title': 'Ramón Escudeiro Tilve Trophy',
        'RamonEscudeiroSection.description': 'Awarded for the best attacking game of the tournament. The organization will appoint a jury to select the winning game. Candidate games must be submitted to the tournament director no later than one hour after the end of round 8. The organization reserves the right to nominate any eligible game, and may declare the prize void at the jury\'s discretion.',
        'RamonEscudeiroSection.grant': 'Prize fund',
        'RamonEscudeiroSection.amount': '150€',

        // PrivacyPolicySection
        'PrivacyPolicySection.title': 'Privacy policy',
        'PrivacyPolicySection.intro':
            'In compliance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), we inform you about the processing of your personal data on this website, owned by Escola Xadrez Pontevedra (CIF G-94022498), a non-profit sports association based in Pontevedra (36003), contactable at',
        'PrivacyPolicySection.whatDataTitle': 'What data we collect and why',
        'PrivacyPolicySection.whatDataP1':
            'This website does not store personal data on any server. The contact form only collects your name, subject, and message to open them in your email client — you decide whether to send the message, and nothing is recorded on our end.',
        'PrivacyPolicySection.whatDataP2':
            'We do not use web analytics or tracking tools. The only cookies present are those strictly necessary to store your Google Maps preference, as detailed in our',
        'PrivacyPolicySection.cookiesLink': 'cookie policy',
        'PrivacyPolicySection.whatDataP3':
            'No data is shared with third parties or transferred internationally, except as inherent to Google Maps if you accept its activation.',
        'PrivacyPolicySection.rightsTitle': 'Your rights',
        'PrivacyPolicySection.rightsP1':
            'You can exercise your rights of access, rectification, erasure, objection, restriction, and portability by writing to us at',
        'PrivacyPolicySection.rightsP2':
            ', with proof of identity. If you believe your data is not being handled in accordance with applicable law, you can lodge a complaint with the',
        'PrivacyPolicySection.aepd': 'Spanish Data Protection Agency',

        // alojamiento
        'alojamiento.title': 'Accommodation',

        // bases
        'bases.title': 'Regulations',
        'bases.section.general': 'General information',
        'bases.section.venue': 'Venue',
        'bases.section.system': 'Competition system',
        'bases.section.groups': 'Groups and categories',
        'bases.section.time': 'Time control',
        'bases.section.byes': 'Byes',
        'bases.section.tiebreaks': 'Tie-breaks',
        'bases.section.specialRule': 'Pontevedra special rule',
        'bases.section.regulations': 'Playing regulations',
        'bases.section.registration': 'Registration',
        'bases.section.data': 'Data protection and image rights',
        'bases.section.final': 'Final provisions',

        // contacto
        'contacto.title': 'Contact',

        // cookies
        'cookies.title': 'Cookies',

        // fotos
        'fotos.title': 'Photos',

        // jugadores
        'jugadores.title': 'Players',

        // noticias
        'noticias.title': 'News',

        // partidas
        'partidas.title': 'Games',

        // premios
        'premios.title': 'Prizes',

        // privacidad
        'privacidad.title': 'Privacy',

        // 404
        '404.title': 'Page not found',
      },
    };

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}
