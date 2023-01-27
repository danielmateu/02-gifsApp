# Instalaciones 

- Bootstrap


# Conceptos

- One Way Data Binding / Two Way
La vinculación de datos unidireccional(oneway) y bidireccional(twoway) son dos de las formas importantes por las que podemos intercambiar datos desde el componente al DOM y viceversa. El intercambio de datos entre el componente y la vista nos ayudará a construir aplicaciones web dinámicas e interactivas.

La vinculación de datos unidireccional vinculará los datos del componente a la vista (DOM) o de la vista al componente. La vinculación de datos unidireccional es unidireccional. Sólo se pueden vincular los datos del componente a la vista o de la vista al componente.

Traducción realizada con la versión gratuita del traductor www.DeepL.com/Translator

- Del componente a la vista/From Component to View
Existen diferentes técnicas de vinculación de datos que utilizan la vinculación de datos unidireccional para vincular datos de un componente a una vista. A continuación se muestran algunas de las técnicas que utilizan la vinculación de datos unidireccional.

- Enlace por interpolación/Interpolation Binding: 
La interpolación se refiere a la vinculación de expresiones en lenguaje marcado.
Enlace de propiedades: La vinculación de propiedades se utiliza para establecer una propiedad de un elemento de la vista. La vinculación establece la propiedad en el valor de una expresión de plantilla.
Vinculación de atributos: La vinculación de atributos se utiliza para establecer una propiedad de atributo de un elemento de la vista.
- Clase/Class Binding: 
El enlace de clase se utiliza para establecer una propiedad de clase de un elemento de la vista.
- Estilo/Style Binding: 
La vinculación de estilo se utiliza para establecer el estilo de un elemento de la vista.

- Creacion de componentes de forma automática

comando + directorio + nombre componente
ng g c heroes/listado

- Directiva ngFor

La directiva ngForOf se utiliza generalmente en la forma abreviada *ngFor. En esta forma, la plantilla que se renderiza para cada iteración es el contenido de un elemento ancla que contiene la directiva.


- Directiva ngIF - else

Generalmente se utiliza una forma abreviada de la directiva, *ngIf="condition", proporcionada como un atributo del elemento ancla para la plantilla insertada. Angular amplía esto a una versión más explícita, en la que el elemento de anclaje está contenido en un elemento <ng-template>.

La directiva *ngIf se utiliza más comúnmente para mostrar condicionalmente una plantilla en línea. La plantilla else por defecto está en blanco.

- Módulos

ng g m (Creación de módulo automatico)

- Creación Componentes con banderas
 ng g c dbz/mainPage --skip-tests -> Crea el componente mainPage y nos ignora los tests

- ngModel
ngModel es una directiva de Angular que se utiliza para vincular un elemento de formulario con una propiedad de un componente. Esto permite que los datos de un formulario se enlacen con la lógica de negocio en el componente y se utilice para realizar operaciones como la validación y el envío de formularios. También permite que los cambios en el formulario se reflejen automáticamente en la propiedad vinculada en el componente y viceversa.

- @Input
@Input es un decorador de Angular que se utiliza para especificar que una propiedad de un componente es una entrada. Esto permite que los datos se pasen desde un componente padre a un componente hijo a través de la arquitectura de componentes de Angular. La sintaxis para utilizar @Input es:

@Input() propertyName: any;

donde "propertyName" es el nombre de la propiedad que se declara como entrada y "any" es el tipo de datos que se espera recibir. En el componente padre, se puede pasar el valor de la propiedad mediante un enlace de propiedad, como:

<app-child-component [propertyName]="value"></app-child-component>

En este ejemplo, el valor de "value" se asigna a la propiedad "propertyName" en el componente hijo.

Además, es posible utilizar @Input para recibir valores dinámicos en el componente hijo.

- @Output 
@Output es un decorador de Angular que se utiliza para especificar que una propiedad de un componente es una salida. Esto permite que los componentes comuniquen entre sí a través de eventos. La sintaxis para utilizar @Output es:

@Output() eventName = new EventEmitter<eventType>();

donde "eventName" es el nombre del evento que se está emitiento, y "eventType" es el tipo de datos que se espera recibir en el componente padre.

En el componente hijo, se puede emitir el evento mediante la función "emit" del objeto EventEmitter, como:

this.eventName.emit(value);

donde "value" es el valor que se está enviando.

En el componente padre, se puede suscribir al evento mediante un enlace de eventos, como:

<app-child-component (eventName)="handlerFunction($event)"></app-child-component>

En este ejemplo, la función "handlerFunction" se llama cada vez que el evento "eventName" es emitido y recibe el valor emitido como argumento.

- EventEmitter
EventEmitter es una clase de Angular que se utiliza para emitir eventos desde un componente o servicio hacia su componente padre o componentes hermanos. Se utiliza para comunicar información de un componente a otro a través de la arquitectura de componentes de Angular. Los componentes pueden suscribirse a los eventos emitidos mediante una directiva de enlace de eventos, como (event)="handlerFunction()", y pueden recibir los datos emitidos como argumentos en la función manejadora. EventEmitter es una clase genérica, lo que significa que se puede especificar el tipo de datos que se emitirá.

- Servicios
Los servicios de Angular son clases que contienen lógica de negocio y/o funcionalidad reutilizable que se utilizan en varios componentes de una aplicación. Los servicios se utilizan para aislar la lógica de negocio de los componentes, lo que permite que los componentes sean más pequeños y manejables. Los servicios se pueden inyectar en componentes mediante la inyección de dependencias, lo que permite que los componentes accedan a la funcionalidad del servicio y reciban actualizaciones automáticas cuando la lógica del servicio cambie. Los servicios también se pueden utilizar para compartir datos entre componentes, comunicarse con APIs externas y manejar tareas asíncronas.
l decorador de los servicios - > @Injectable

