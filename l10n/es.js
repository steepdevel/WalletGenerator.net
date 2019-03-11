module.exports = {
  choosecurrency: "Elige criptodivisa",
  singlewallet: "Cartera única",
  paperwallet: "Cartera de papel",
  bulkwallet: "Múltiples carteras",
  brainwallet: "Cartera mnemotécnica",
  detailwallet: "Detalles de la cartera",
  donate: "Ayúdanos",
  generatelabelbitcoinaddress: "Generando nueva dirección...",
  generatelabelmovemouse: "MUEVE el ratón para añadir aleatoriedad extra...",
  generatelabelkeypress:
    "O escribe caracteres aleatorios en el cuadro de texto",
  skipMessage:
    "Puedes saltar este paso si no planeas usar el generador aleatorio de claves.",
  singlelabelbitcoinaddress: "Dirección Pública",
  singleshare: "COMPARTIR",
  singlelabelprivatekey:
    "Clave Privada (formato de importación de cartera, WIF)",
  singlesecret: "SECRETO",
  securitystep0title:
    "Paso 0. Sigue las recomendaciones de la lista de verificación de seguridad",
  securitystep0:
    'El primer paso es <strong>descargar</strong> este website de <a href="https://github.com/MichaelMure/WalletGenerator.net/archive/master.zip">Github</a> y abrir el archivo index.html directamente desde tu ordenador. Simplemente, es muy sencillo colar algo de código maligno en el javascript de 6000+ líneas para filtrar tu clave privada, y no querrás ver tus fondos siendo robados. El código de control de versiones facilita mucho saber qué ha funcionado realmente hasta la fecha. Para mayor seguridad, <strong>desconecta tu acceso a internet</strong> mientras estás generando tu cartera.',
  securitystep1title: "Paso 1. Genera una nueva dirección",
  securitystep1:
    'Elige tu criptodivisa y haz click en el botón "Generar nueva dirección".',
  securitystep2title: "Paso 2. Imprime la cartera de papel",
  securitystep2:
    "Haz click en la pestaña Cartera de papel e imprime la página con la configuración de alta calidad. <strong>Nunca guardes la página como un archivo PDF para imprimirla más tarde porque un archivo es más facilmente hackeable que un trozo de papel.</strong>",
  securitystep3title: "Paso 3. Pliega la cartera de papel",
  securitystep3:
    'Pliega tu cartera de papel nueva siguiendo las líneas.\n<img src="images/foldinginstructions.png" alt="Dobla por la mitad a lo largo, y después en tres a lo ancho."><br>\nPuedes introducir un extremo dentro del otro para cerrar la cartera.',
  securitystep4title: "Paso 4. Comparte tu dirección pública",
  securitystep4:
    "Utiliza tu dirección pública para recibir dinero de otros usuarios de criptodivisas. Puedes compartir tu dirección pública tanto como quieras.",
  securitystep5title: "Paso 5. Mantén secreta tu clave privada",
  securitystep5:
    "La clave privada es la llave a tus monedas, si alguien la obtuviera, podría retirar los fondos que se encontraran en la cartera en ese momento, y cualquier fondo que se depositara en esa cartera en un futuro.",
  securitystep6:
    "Por favor, prueba a gastar una pequeña cantidad antes de recibir cualquier pago grande.",
  securitychecktitle: "Lista de verificación de seguridad:",
  securitychecklivecd:
    "Estás usando un sistema operativo seguro, garantizado de estar libre de spyware y virus, por ejemplo, un LiveCD de Ubuntu?",
  supportedcurrencylbl: "criptodivisas soportadas!",
  paperlabelencrypt: "Encriptación BIP38?",
  paperlabelBIPpassphrase: "Contraseña:",
  bulklabelstartindex: "Iniciar índice en:",
  bulklabelrowstogenerate: "Líneas a generar:",
  bulklabelcompressed: "Direcciones comprimidas?",
  bulklabelcsv:
    "Valores separados por coma: Índice,Dirección,Clave privada (WIF)",
  brainlabelenterpassphraselbl: "Introduce contraseña:",
  brainlabelconfirmlbl: "Confirma la contraseña:",
  brainalgorithm: "Algoritmo: SHA256(contraseña)",
  brainlabelbitcoinaddress: "Dirección pública:",
  brainlabelprivatekey:
    "Clave privada (formato de importación de cartera, WIF):",
  detaillabelenterprivatekey: "Introduce la clave privada",
  qrcaminstructiontitle: "Escanear código QR usando la cámara",
  paperqrnotsupported:
    "Lo siento, pero tu navegador web no soporta los controles HTML5 para la cámara. Intenta usar una versión reciente de FireFox (recomendado), Chrome u Opera.",
  paperqrpermissiondenied:
    '<p>Permiso denegado. Tu navegador debería mostrarte un mensaje solicitándote acceso a la cámara. Por favor, haz click en el botón "Permitir" para habilitar la cámara.</p>',
  detaillabelpassphrase: "Introduzca la contraseña BIP38",
  detaillabelnote1:
    "Tu clave privada es un número secreto único que sólo tú sabes. Puede codificarse en varios formatos. A continuación mostramos la dirección pública y la clave pública que corresponden a tu clave privada así como tu clave privada en los formatos de codificación más populares (WIF, WIFC, HEX, B64).",
  detaillabelbitcoinaddress: "Dirección pública",
  detaillabelbitcoinaddresscomp: "Dirección pública comprimida",
  detaillabelpublickey: "Clave pública (130 caracteres [0-9A-F]):",
  detaillabelpublickeycomp:
    "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
  detaillabelprivwif: "Clave privada WIF<br>51 caracteres Base58",
  detaillabelprivwifcomp:
    "Clave privada WIF Comprimida<br>52 caracteres Base58",
  detaillabelprivhex:
    "Clave privada en formato Hexadecimal (64 caracteres [0-9A-F]):",
  detaillabelprivb64: "Clave privada Base64 (44 caracteres):",
  detaillabelprivmini:
    "Clave privada en formato Mini (22, 26 or 30 caracteres):",
  detaillabelprivb6: "Clave privada en formato Base6 (99 caracteres [0-5]):",
  detaillabelprivbip38:
    "Clave privada en formato BIP38 (58 caracteres Base58):",
  detaillabelq1: "Cómo puedo crear una cartera usando dados? Qué  es B6?",
  detaila1:
    "Una parte importante de la creación de una cartera para una criptomoneda es cerciorarse de que los números aleatorios utilizados para crearla son verdaderamente aleatorios. La aleatoriedad real es mucho mejor que la pseudo-aleatoriedad generada por ordenador. La manera más sencilla de generar aleatoriedad real es usando dados. Para crear una clave privada para una criptomoneda sólo necesitas un dado de 6 caras, que tirarás 99 veces, anotando cada vez el valor del dado. Cuando anotes los valores, sigue estas reglas: 1=1, 2=2, 3=3, 4=4, 5=5, 6=0. Haciéndolo así estarás creando un gran número aleatorio, que será tu clave privada, en formato B6 o base 6. Si introduces tu clave privada de 99 caracteres en base 6 en el cuadro de texto de arriba y haces click en ver detalles, verás la dirección pública asociada a tu clave privada. Deberías anotarte también tu clave privada en formato WIF, porque su uso está más extendido.",
  donatetextfooter:
    "Para apoyar el desarrollo de este generador de carteras, puedes hacer donaciones a las siguientes direcciones. Cuando el soporte para una criptodivisa ha sido añadido por un colaborador externo del proyecto, él recibe la donación directamente.",
  footersupport: "Ayuda a WalletGenerator.net",
  footerlabelgithub: "Descargar (Repositorio GitHub)",
  footerlabelcopyright2:
    "Los copyrights del JavaScript se incluyen en el código fuente.",
  footerlabelnowarranty: "Sin garantía.",
  defaultTitle:
    "WalletGenerator.net - Generador universal de carteras de papel para Bitcoin y otras criptodivisas",
  title: "Generador de carteras de papel",
  brainalertpassphrasewarning:
    "Atención: Elegir una contraseña robusta es importante para evitar los intentos de adivinarla mediante la fuerza bruta y que te roben tus monedas.",
  brainalertpassphrasetooshort: "La contraseña introducida es demasiado corta.",
  brainalertpassphrasedoesnotmatch:
    "La contraseña no coincide con la contraseña de confirmación.",
  bulkgeneratingaddresses: "Generando direcciones...",
  bip38alertincorrectpassphrase:
    "Contraseña incorrecta para esta clave privada encriptada.",
  bip38alertpassphraserequired: "Se necesita contraseña para esta clave BIP38",
  detailconfirmsha256:
    "El texto introducido no es una clave privada válida!\n¿Quieres utilizar el texto introducido como contraseña y crear una clave privada usando un hash SHA256 de la contraseña?\nAtención: Elegir una contraseña robusta es importante para evitar los intentos de adivinarla mediante la fuerza bruta y que te roben tus monedas.",
  detailalertnotvalidprivatekey:
    "El texto introducido no es una clave privada válida",
  securitychecklistrandomOK:
    "Tu navegador es capaz de generar claves criptográficamente aleatorias utilizando window.crypto.getRandomValues",
  securitychecklistrandomNOK:
    "Tu navegador NO soporta window.crypto.getRandomValues(), que es importante para generar los números aleatorios más seguros posibles. Utiliza un navegador más moderno.",
  securitychecklistofflineNOK:
    "Pare que estás ejecutando este generador desde un sitio online, lo que no se recomienda si vas a crear carteras valiosas. En vez de esto, utiliza el enlace de descarga al final de esta página para descargar un archivo ZIP de GitHub y ejecuta este generador offline como un archivo HTML 'local'.",
  securitychecklistofflineOK: "Estás ejecutando este generador de forma local.",
  paperwalletback:
    "<ul><li>Para depositar fondos en esta cartera de papel, envía criptomonedas a su dirección pública, en cualquier momento.</li><li>Comprueba tu balance buscando la dirección pública en un explorador de bloques como blockchain.info.</li><li><b>NUNCA REVELES LA CLAVE PRIVADA</b> hasta que estés listo para importar el balance de esta cartera a un cliente de criptomoneda, portal de cambio o cartera online.</li></ul><b>Cantidad:</b> ___________       <b>Fecha:</b> ________________<br /><b>Notas:</b> ______________________________________"
};
