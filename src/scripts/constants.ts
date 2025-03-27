// Solutions Imgs
import crane from "@/assets/Crane.jpg";
import fan from "@/assets/Fan.jpg";
import packages from "@/assets/Packages.jpg";
import plastic from "@/assets/Plastic.jpg";
import tool from "@/assets/Tool.jpg";
import textile from "@/assets/Textile.jpg";
import stairs from "@/assets/Staris.jpg";
import slicing from "@/assets/Slicing.jpg";

// Images
// Products
import PLC1 from "@/assets/Products/plc1.jpg";
import PLC2 from "@/assets/Products/plc2.jpg";
import PLC3 from "@/assets/Products/plc3.jpg";
import PLC4 from "@/assets/Products/plc4.jpg";
import PLC5 from "@/assets/Products/plc5.jpg";
import PLC6 from "@/assets/Products/plc6.jpg";
import PLC7 from "@/assets/Products/plc7.jpg";
import PLC8 from "@/assets/Products/plc8.jpg";
import HMI1 from "@/assets/Products/HMI1.jpg";
import HMI2 from "@/assets/Products/HMI2.jpg";
import HMI3 from "@/assets/Products/HMI3.jpg";
import HMI4 from "@/assets/Products/HMI4.jpg";
import HMI5 from "@/assets/Products/HMI5.jpg";
import CNC1 from "@/assets/Products/CNC1.jpg";
import CNC2 from "@/assets/Products/CNC2.jpg";
import CNC3 from "@/assets/Products/CNC3.jpg";
import CNC4 from "@/assets/Products/CNC4.jpg";
import CNC5 from "@/assets/Products/CNC5.jpg";
import CNC6 from "@/assets/Products/CNC6.jpg";
import Servo1 from "@/assets/Products/Servo1.jpg";
import Servo2 from "@/assets/Products/Servo2.jpg";
import Servo3 from "@/assets/Products/Servo3.jpg";
import Servo4 from "@/assets/Products/Servo4.jpg";
import Servo5 from "@/assets/Products/Servo5.jpg";
import Servo6 from "@/assets/Products/Servo6.jpg";
import Servo7 from "@/assets/Products/Servo7.jpg";
import Freq1 from "@/assets/Products/Freq1.jpg";
import Freq2 from "@/assets/Products/Freq2.jpg";
import Freq3 from "@/assets/Products/Freq3.jpg";
import Freq4 from "@/assets/Products/Freq4.jpg";
import Freq5 from "@/assets/Products/Freq5.jpg";
import Freq6 from "@/assets/Products/Freq6.jpg";
import Freq7 from "@/assets/Products/Freq7.jpg";
import Freq8 from "@/assets/Products/Freq8.jpg";
import Spindle1 from "@/assets/Products/Spindle1.jpg";
import Spindle2 from "@/assets/Products/Spindle2.jpg";
import AC1 from "@/assets/Products/AC1.jpg";
import AC2 from "@/assets/Products/AC2.jpg";
import Accessory1 from "@/assets/Products/Acessory1.jpg";
import Accessory2 from "@/assets/Products/Acessory2.jpg";
import Sensor1 from "@/assets/Products/Sensor1.jpg";
import Sensor2 from "@/assets/Products/Sensor2.jpg";
import Sensor3 from "@/assets/Products/Sensor3.jpg";
import Sensor4 from "@/assets/Products/Sensor4.jpg";

// Solutions
import print1 from "@/assets/Solutions/print1.jpg";
import print2 from "@/assets/Solutions/print2.jpg";
import print3 from "@/assets/Solutions/print3.jpg";
import print4 from "@/assets/Solutions/print4.jpg";
import print5 from "@/assets/Solutions/print5.jpg";
import print6 from "@/assets/Solutions/print6.jpg";
import print7 from "@/assets/Solutions/print7.jpg";
import print8 from "@/assets/Solutions/print8.jpg";
import print9 from "@/assets/Solutions/print9.jpg";
import print10 from "@/assets/Solutions/print10.jpg";
import print11 from "@/assets/Solutions/print11.jpg";
import CNCM1 from "@/assets/Solutions/CNCM1.jpg";
import CNCM2 from "@/assets/Solutions/CNCM2.jpg";
import Textil1 from "@/assets/Solutions/Textil1.jpg";
import Textil2 from "@/assets/Solutions/Textil2.jpg";
import Textil3 from "@/assets/Solutions/Textil3.jpg";
import Textil4 from "@/assets/Solutions/Textil4.jpg";
import Textil5 from "@/assets/Solutions/Textil5.jpg";
import Textil6 from "@/assets/Solutions/Textil6.jpg";
import Textil7 from "@/assets/Solutions/Textil7.jpg";
import Textil8 from "@/assets/Solutions/Textil8.jpg";
import Textil9 from "@/assets/Solutions/Textil9.jpg";
import Textil10 from "@/assets/Solutions/Textil10.jpg";
import Textil11 from "@/assets/Solutions/Textil11.jpg";
import Textil12 from "@/assets/Solutions/Textil12.jpg";
import Pump1 from "@/assets/Solutions/Pump1.jpg";
import Pump2 from "@/assets/Solutions/Pump2.jpg";
import Pump3 from "@/assets/Solutions/Pump3.jpg";
import Pump4 from "@/assets/Solutions/Pump4.jpg";
import Conv1 from "@/assets/Solutions/Conv1.jpg";
import Conv2 from "@/assets/Solutions/Conv2.jpg";
import Conv3 from "@/assets/Solutions/Conv3.jpg";
import Conv4 from "@/assets/Solutions/Conv4.jpg";
import Conv5 from "@/assets/Solutions/Conv5.jpg";
import Conv6 from "@/assets/Solutions/Conv6.jpg";
import Conv7 from "@/assets/Solutions/Conv7.jpg";
import Conv8 from "@/assets/Solutions/Conv8.jpg";
import Conv9 from "@/assets/Solutions/Conv9.jpg";
import Conv10 from "@/assets/Solutions/Conv10.jpg";
import Elev1 from "@/assets/Solutions/Elev1.jpg";
import Elev2 from "@/assets/Solutions/Elev2.jpg";
import Elev3 from "@/assets/Solutions/Elev3.jpg";
import Crane1 from "@/assets/Solutions/Crane1.jpg";
import Plastic1 from "@/assets/Solutions/Plastic1.jpg";

export const Products: productsIndexed = {
  PLC: {
    route: "/section/products",
    description:
      "HC series programmable logic controllers with high reliability, high performance and high speed features have been applied in many",
    itemsList: [
      {
        title: "HCS Series Card type PLC",
        mainImg: PLC1,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCS series is a new series of economical card type PLC, ptimized structure, innovative communication, PID and other powerful instructions for easy programming, built-in cloud engine. MPU built-in Ethernet+ RS485, some MPU integrated analog interface.",
        features: `
          Hardware features:

          1. Easy selection: Product model naming is easy to understand and convenient for model selection.

          2. Structure optimization: Optimized structure design, compact size, beautiful appearance, saving installation space.

          3. Easy wiring: Direct insert terminal, humanized design, more convenient wiring.

          4. Integrated analog interface: The PLC main unit integrates DI/DO and AI/AO with flexible configuration and higher cost performance.

          5. Ethernet + : Ethernet and RS485 interfaces are standard on the PLC main unit, supporting simultaneous operation of two communication ports. Each communication port can be programmed and networked as a master or slave station.

          6. Unlimited networking: PLC main unit can be networking, theoretically can form unlimited points control network, a perfect substitute for medium or even large PLC system.

          7. Perfect temperature control: Thermal resistance, thermocouple and unique temperature& humidity sensor modules, etc., perfectly meet the application requirements of process control.

          8. Communication + : Communication extension module with isolation to meet stable communication extension requirements.



          Programming software features:

          1. Three programming languages: HPMaster is a PLC programming software conforming to IEC 61131-3, which supports LD (ladder diagram), FBD (function block diagram) and IL (instruction table).

          2. Good compatibility: Stable operation in Win98, Win200X, WinXP, Win7, Win8, Win10 and other operating systems.

          3. Prompt message and help function: All instructions and detailed information of hardware modules can be opened in the software through F1 key to find the answer. Even if HPMaster programming software is used for the first time, the program can be easily written.

          4. Three-level password protection: Password for project files, password for PLC, password for individual program blocks, and protection functions such as preventing program upload.

          5. Modular program project structure: Up to 63 program blocks can be established (including main program, subroutine, interrupt program), programming language can be chosen arbitrarily, execution order of program blocks can be adjusted arbitrarily, each block can be imported and exported separately and has the same password protection as program project.

          6. Cloud programming: The built-in cloud engine enables PLC remote programming, download, firmware upgrade, diagnosis, monitoring and debugging through HNC cloud, enabling easy remote connection and detecting on-site conditions at any time.

          Locally, the PLC can be programmed with a cloud engine built into the TP300 series HMI.

          7. Program simulator: Can be simulated running PLC program in the case of complete separation from PLC,greatly reducing field debugging time and improving debugging efficiency.

          8. Communication simulator: Equipped with a communication simulation tool specially designed for debugging communication instructions, it can simulate the process of PLC executing communication instructions and processing the data returned from the slave computer.

          9. Online monitoring and debugging function: Provide up to 10 pages of component monitoring table, can choose to display data in different data formats, support mixed monitoring of bit components and register components and display component notes at the same time.

          10 Unique real-time curve function: Real-time curve monitoring can be carried out on any register components to facilitate process control and debugging.

          11. PLC execution file: The PLC source program can be generated into a PLC execution file that can be independently released and executed, convenient and safe to give the PLC execution file to the end user to download, there is no need to worry about the user knowing the source program content.

          12. Firmware upgrade function: No matter CPU host or extension module, firmware can be upgraded for free. Even the previously purchased products can have various latest functions continuously introduced.

          13. Powerful online PLC function: It can search out all PLC connected with the PC, show the information and status of all online PLC, and can choose any PLC for online monitoring, program download, firmware upgrade, control PLC running stop, etc.

          

          Programming instructions features:

          1. Powerful innovation convenience instructions: on the basis of analyzing and absorbing various EXISTING PLC instructions, many powerful innovation convenience instructions are launched. Such as communication instruction (MODR, MODW HWRD HWWR), PID control (PID), valve control (VC), upper and lower alarm (HAL, LAL), send (SC), the temperature curve radius (TTC), only one instruction can implement other brand PLC need multiple instructions to realize the function, greatly improve the efficiency of programming and program run faster.

          2. Instruction routines: In the help document, all instructions are explained in detail and corresponding routines are supported to be opened and downloaded into PLC.

          3. Rich communication protocols: built-in Modbus TCP, Modbus RTU/ASCII protocol, free communication protocol and HNCbus high-speed communication protocol instructions independently developed by HNC.

          4. Powerful communication instruction: No matter use what kind of communication protocol is simply a communication instruction can complete complex communication function, no conflict, to send and receive control for communication port, communication interrupt handling problems such as trouble, and the same communication port can use different protocols, complete the required all sorts of data exchange easily.

          5. Powerful analog input processing: AI register can be used to directly access analog input, analog input support engineering conversion, sampling times setting and zero correction.

          6. Powerful analog output processing: The analog output can be directly controlled by AQ register. The analog output can support engineering conversion and can be configured with blackout output holding function.

          7. PID control function: Support 32 incremental PID, 32 self-tuning PID, 32 fuzzy temperature control, with TTC temperature curve control, VC valve control and other instructions to easily achieve a variety of complex control requirements of industrial site.`,
      },
      {
        title: "HCG Series Card type PLC",
        mainImg: PLC2,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCG series is a new series of standard card type PLC, innovative communication, PID and other powerful instructions for easy programming, built-in cloud engine, high speed pulse DI/DO. MPU built-in Ethernet+ RS485, some MPU integrated AI/AO.",
        features: `
          Hardware features:

1. Easy selection: Product model naming is easy to understand and convenient for model selection.

2. Structure optimization: Optimized structure design, compact size, beautiful appearance, saving installation space.

3. Easy wiring: Direct insert terminal, humanized design, more convenient wiring.

4. Integrated analog interface: The PLC main unit integrates DI/DO and AI/AO with flexible configuration and higher cost performance.

5. Ethernet + : Ethernet and RS485 interfaces are standard on the PLC main unit, supporting simultaneous operation of two communication ports. Each communication port can be programmed and networked as a master or slave station.

6.1+15+256: A single main unit can expand up to 15 modules, with a maximum expansion capacity of 256 points.

7. Unlimited networking: PLC main unit can be networking, theoretically can form unlimited points control network, a perfect substitute for medium or even large PLC system.

8. High-speed pulse interface: PLC main unit supports up to 2 channels A/B phase (4 points) 200KHz high-speed pulse input/output.

9. Perfect temperature control: Thermal resistance, thermocouple and unique temperature& humidity sensor modules, etc., perfectly meet the application requirements of process control.

10. Communication + : Communication extension module with isolation to meet stable communication extension requirements.



Programming software features:

1. Three programming languages: HPMaster is a PLC programming software conforming to IEC 61131-3, which supports LD (ladder diagram), FBD (function block diagram) and IL (instruction table).

2. Good compatibility: Stable operation in Win98, Win200X, WinXP, Win7, Win8, Win10 and other operating systems.

3. Prompt message and help function: All instructions and detailed information of hardware modules can be opened in the software through F1 key to find the answer. Even if HPMaster programming software is used for the first time, the program can be easily written.

4. Three-level password protection: Password for project files, password for PLC, password for individual program blocks, and protection functions such as preventing program upload.

5. Modular program project structure: Up to 63 program blocks can be established (including main program, subroutine, interrupt program), programming language can be chosen arbitrarily, execution order of program blocks can be adjusted arbitrarily, each block can be imported and exported separately and has the same password protection as program project.

6. Cloud programming: The built-in cloud engine enables PLC remote programming, download, firmware upgrade, diagnosis, monitoring and debugging through HNC cloud, enabling easy remote connection and detecting on-site conditions at any time.

Locally, the PLC can be programmed with a cloud engine built into the TP300 series HMI.

7. Program simulator: Can be simulated running PLC program in the case of complete separation from PLC,greatly reducing field debugging time and improving debugging efficiency.

8. Communication simulator: Equipped with a communication simulation tool specially designed for debugging communication instructions, it can simulate the process of PLC executing communication instructions and processing the data returned from the slave computer.

9. Online monitoring and debugging function: Provide up to 10 pages of component monitoring table, can choose to display data in different data formats, support mixed monitoring of bit components and register components and display component notes at the same time.

10 Unique real-time curve function: Real-time curve monitoring can be carried out on any register components to facilitate process control and debugging.

11. PLC execution file: The PLC source program can be generated into a PLC execution file that can be independently released and executed, convenient and safe to give the PLC execution file to the end user to download, there is no need to worry about the user knowing the source program content.

12. Firmware upgrade function: No matter CPU host or extension module, firmware can be upgraded for free. Even the previously purchased products can have various latest functions continuously introduced.

13. Powerful online PLC function: It can search out all PLC connected with the PC, show the information and status of all online PLC, and can choose any PLC for online monitoring, program download, firmware upgrade, control PLC running stop, etc.

 

Programming instructions features:

1. Powerful innovation convenience instructions: on the basis of analyzing and absorbing various EXISTING PLC instructions, many powerful innovation convenience instructions are launched. Such as communication instruction (MODR, MODW HWRD HWWR), PID control (PID), valve control (VC), upper and lower alarm (HAL, LAL), send (SC), the temperature curve radius (TTC), only one instruction can implement other brand PLC need multiple instructions to realize the function, greatly improve the efficiency of programming and program run faster.

2. Instruction routines: In the help document, all instructions are explained in detail and corresponding routines are supported to be opened and downloaded into PLC.

3. Rich communication protocols: built-in Modbus TCP, Modbus RTU/ASCII protocol, free communication protocol and HNCbus high-speed communication protocol instructions independently developed by HNC.

4. Powerful communication instruction: No matter use what kind of communication protocol is simply a communication instruction can complete complex communication function, no conflict, to send and receive control for communication port, communication interrupt handling problems such as trouble, and the same communication port can use different protocols, complete the required all sorts of data exchange easily.

5. Powerful analog input processing: AI register can be used to directly access analog input, analog input support engineering conversion, sampling times setting and zero correction.

6. Powerful analog output processing: The analog output can be directly controlled by AQ register. The analog output can support engineering conversion and can be configured with blackout output holding function.

7. PID control function: Support 32 incremental PID, 32 self-tuning PID, 32 fuzzy temperature control, with TTC temperature curve control, VC valve control and other instructions to easily achieve a variety of complex control requirements of industrial site.

8. High-speed pulse instruction: Supports acceleration and deceleration pulse output.

The unique synchronous pulse output instruction can easily realize accurate synchronization control. The single machine supports 4-channel pulse width modulation output (PWM) and can drive 4 servo or stepper motors at the same time.`,
      },
      {
        title: "HCM Series Card type PLC",
        mainImg: PLC3,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCM series is a high performence card type PLC, innovative communication, PID, motion control and other powerful instructions, support interpolation, built-in cloud engine, high speed pulse DI/DO. built-in Ethernet+ RS485, some integrated AI/AO.",
        features: `Hardware features:

1. Easy selection: Product model naming is easy to understand and convenient for model selection.

2. Structure optimization: Optimized structure design, compact size, beautiful appearance, saving installation space.

3. Easy wiring: Direct insert terminal, humanized design, more convenient wiring.

4. Integrated analog interface: The PLC main unit integrates DI/DO and AI/AO with flexible configuration and higher cost performance.

5. Ethernet + : Ethernet and RS485 interfaces are standard on the PLC main unit, supporting simultaneous operation of two communication ports. Each communication port can be programmed and networked as a master or slave station.

6.1+15+256: A single main unit can expand up to 15 modules, with a maximum expansion capacity of 256 points.

7. Unlimited networking: PLC main unit can be networking, theoretically can form unlimited points control network, a perfect substitute for medium or even large PLC system.

8. High-speed pulse interface: PLC main unit supports up to 4 channels A/B phase (8 points) 200KHz high-speed pulse input/output.

9. Perfect temperature control: Thermal resistance, thermocouple and unique temperature& humidity sensor modules, etc., perfectly meet the application requirements of process control.

10. Communication + : Communication extension module with isolation to meet stable communication extension requirements.



Programming software features:

1. Three programming languages: HPMaster is a PLC programming software conforming to IEC 61131-3, which supports LD (ladder diagram), FBD (function block diagram) and IL (instruction table).

2. Good compatibility: Stable operation in Win98, Win200X, WinXP, Win7, Win8, Win10 and other operating systems.

3. Prompt message and help function: All instructions and detailed information of hardware modules can be opened in the software through F1 key to find the answer. Even if HPMaster programming software is used for the first time, the program can be easily written.

4. Three-level password protection: Password for project files, password for PLC, password for individual program blocks, and protection functions such as preventing program upload.

5. Modular program project structure: Up to 63 program blocks can be established (including main program, subroutine, interrupt program), programming language can be chosen arbitrarily, execution order of program blocks can be adjusted arbitrarily, each block can be imported and exported separately and has the same password protection as program project.

6. Cloud programming: The built-in cloud engine enables PLC remote programming, download, firmware upgrade, diagnosis, monitoring and debugging through HNC cloud, enabling easy remote connection and detecting on-site conditions at any time.

Locally, the PLC can be programmed with a cloud engine built into the TP300 series HMI.

7. Program simulator: Can be simulated running PLC program in the case of complete separation from PLC,greatly reducing field debugging time and improving debugging efficiency.

8. Communication simulator: Equipped with a communication simulation tool specially designed for debugging communication instructions, it can simulate the process of PLC executing communication instructions and processing the data returned from the slave computer.

9. Interpolation simulator: Track and draw the motion trajectory generated by motion control instructions such as linear interpolation and circular interpolation, display the current position, mechanical origin position, output mode, etc., of the channel, or set the axis length and unit pulse number.

10. Online monitoring and debugging function: Provide up to 10 pages of component monitoring table, can choose to display data in different data formats, support mixed monitoring of bit components and register components and display component notes at the same time.

11 Unique real-time curve function: Real-time curve monitoring can be carried out on any register components to facilitate process control and debugging.

12. PLC execution file: The PLC source program can be generated into a PLC execution file that can be independently released and executed, convenient and safe to give the PLC execution file to the end user to download, there is no need to worry about the user knowing the source program content.

13. Firmware upgrade function: No matter CPU host or extension module, firmware can be upgraded for free. Even the previously purchased products can have various latest functions continuously introduced.

14. Powerful online PLC function: It can search out all PLC connected with the PC, show the information and status of all online PLC, and can choose any PLC for online monitoring, program download, firmware upgrade, control PLC running stop, etc.

 

Programming instructions features:

1. Powerful innovation convenience instructions: on the basis of analyzing and absorbing various EXISTING PLC instructions, many powerful innovation convenience instructions are launched. Such as communication instruction (MODR, MODW HWRD HWWR), PID control (PID), valve control (VC), upper and lower alarm (HAL, LAL), send (SC), the temperature curve radius (TTC), only one instruction can implement other brand PLC need multiple instructions to realize the function, greatly improve the efficiency of programming and program run faster.

2. Instruction routines: In the help document, all instructions are explained in detail and corresponding routines are supported to be opened and downloaded into PLC.

3. Rich communication protocols: built-in Modbus TCP, Modbus RTU/ASCII protocol, free communication protocol and HNCbus high-speed communication protocol instructions independently developed by HNC.

4. Powerful communication instruction: No matter use what kind of communication protocol is simply a communication instruction can complete complex communication function, no conflict, to send and receive control for communication port, communication interrupt handling problems such as trouble, and the same communication port can use different protocols, complete the required all sorts of data exchange easily.

5. Powerful analog input processing: AI register can be used to directly access analog input, analog input support engineering conversion, sampling times setting and zero correction.

6. Powerful analog output processing: The analog output can be directly controlled by AQ register. The analog output can support engineering conversion and can be configured with blackout output holding function.

7. PID control function: Support 32 incremental PID, 32 self-tuning PID, 32 fuzzy temperature control, with TTC temperature curve control, VC valve control and other instructions to easily achieve a variety of complex control requirements of industrial site.

8. High-speed pulse instruction: Supports acceleration and deceleration pulse output.

The unique synchronous pulse output instruction can easily realize accurate synchronization control. The single machine supports 8-channel pulse width modulation output (PWM) and can drive 8 servo or stepper motors at the same time.

9. Motion control function: The single machine supports 8-axis 200KHz motion control, linear interpolation and circular interpolation of any 2-axis, absolute position, relative position, reverse clearance compensation, origin regression, electric origin definition and other functions.`,
      },
      {
        title: "HCD2 Series Card type PLC",
        mainImg: PLC4,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCD2 standard PLC series provides 14~60 points mainframe and 8~40 points digital input/output modules, including the maximum input/output expansion of the mainframe up to 256/256 points.",
        features: `
        1. High speed input/output: 4-channel AB phase for input of 200Khz, 8-axis high speed output of 200Khz.

2. With Ethernet function, support online monitoring, download program, support MODBUSTCP/IP communication, free protocol communication.

3. Using RS232 and RS485*2 dual-communication port, it both can realize HMI or PC communication, compatible with MODBUS ASCII and MODBUS RTU communication protocols.

4. Advanced saving technology in case of power-down, the program is permanently saved

5. Rich expansion: it can be expanded to 512 digital quantities, it otherwise can be matched with analog, weighing and temperature expansions.

6. Program undergoes encryption processing, it is optional to upload or not for protecting the user's intellectual property.

7. You can download by inserting a USB disk, download and monitor the program by using a dual-headed USB cable for faster communication, with a download rate of up to 12Mbps.
        `,
      },
      {
        title: "HCM2 Series Card type PLC",
        mainImg: PLC5,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCM2 series PLC provides 32-60 points mainframe with built-in electronic cam function, including fixed length chasing shear, flying shear, wheel cutting, synchronization and other technical solutions. It adopts electronic cam speed curve, has high positioning accuracy and has no accumulated error. With HNC's self-defined instructions, it is simple to make application programming and is easy to understand, and it runs smoothly. The alignment accuracy is within 0.20mm. It can also be used with analog input/output module, temperature module and weighing module. It is rich in expansion and has stable performance to meet various applications.",
        features: `
        1. Expandable to 256 isolated input/output ports.

2. Advanced saving technology in case of power-down, the program is permanently saved.

3. Pulse control method: up to 12 axes stepper/serVo motors can be driven.

4. With program encryption processing, it can be set whether to upload or not to protect the user's intellectual property.

5. You can download the program by inserting a USB disk or use a dua-headed USB cable to download and monitor the program, with faster communication speed, the download rate is up to 12Mbps.

6. By Using RS232 and RS485 dual communiction port, it both can realize HMI or PC communiction, it is compatible with MODBUS ASCll and MODBUS RTU communication protocols.
        `,
      },
      {
        title: "HCH2 Series Card type PLC",
        mainImg: PLC6,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "Multi-axis controller based on EtherCAT field bus has a bus transmission rate of 100Mbps, uses a distributed clock, combines pulse axes with bus axes, can quickly, accurately and efficiently transfer data, is convenient for users to quickly get started. It supports single-axis motion commands such as position, speed, torque and return to origin, and supports multi-axis commands such as electronic gear, electronic cam, linear interpolation and circular arc interpolation. With multiple built-in communication ports, there are RS232, RS485, USB and Ethernet ports for users to choose. It has perpetual calendar and can expand IO ports.",
        features: `
        1. Pulse control method and bus control: The bus is combined with the pulse axis for flexible and free distribution.

2. High speed input/output: 4-channels AB phase for input of 200Khz, 8-axis high speed output of 200Khz.

3. With Ethernet function, support online monitoring, download program, support MODBUSTCP/IP communication, free protocol communication.

4. Using RS232 and RS485 dual-communication port, it both can realize HMI or PC communication, compatible with MODBUS ASCII and MODBUSRTU communication protocols.

5. Advanced saving technology in case of power-down, the program is permanently saved.

6. Rich expansion: it can be expanded to 512 digital quantities, it otherwise can be matched with analog, weighing and temperature expansions.

7. Program undergoes encryption processing, it is optional to upload or not for protecting the user's intellectual property.

8. You can download by inserting a USB disk, download and monitor the program by using a dual-headed USB cable for faster communication, with a download rate of up to 12Mbps.
        `,
      },
      {
        title: "HCG2 Series Card type PLC",
        mainImg: PLC7,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCG2 standard PLC series provides 14-68 points mainframe and 8-40 points digital input/output modules, including the mainframe maximum input/output expansion up to 256/256 points. In addition, it can be used with analog input/output expansion module. temperature exoansion module, and weighing expansion module, with rich expansion and stable performance to meet a variety of applications.",
        features: `
        1. Pulse control mode: lt can drive stepper/servo motor up to 12 axes.
2. lt supports single-phase high-speed counting to 12 channels and diferential high-speed counting input up to 6 channels: the maximum frequency is 200kHz.
3. With Ethernet function, support online monitoring, download program, support MODBUSTCP/IP communication, free protocol communication.
4. Using RS232 and RS485 dual-communication port, it both can realize HMl or PC communication, compatible with MODBUS ASCll and MODBUS RTU communication protocols.
5. Advanced saving technology in case of power-down, the program is permanently saved.
6. It can be expanded to 256 isolated input/output ports.
7. Program undergoes encryption processing, it is optional to upload or not for protecting the user's intellectual property.
8. You can download by inserting a USB disk, download and monitor the program by using a dua-headed USB cable for faster communication, with a download rate of up to12Mbps.`,
      },
      {
        title: "HCS2 Series Card type PLC",
        mainImg: PLC8,
        dimensionsImg: "",
        parametersImg: "",
        overview:
          "HCS2 compact PLC series provides 14-16 points for mainframe and 8-40 points for diaital input/outout modules, including mainframe maximum input/output expansion up to 256/256 points. In addition, it can be used with analog input/outout expansion module. temperature expansion module and weighing expansion module, it is rich in expansion and is stable in performance to meet various applications.",
        features: `
        1. Compact design, Save space and facilitate customer installation.

2. DC24V power supply, Easy wiring.

3. The input is compatible with NPN/PNP, suitable for different device interfaces.

4. 16 expansion modules can be connected to the right side, up to 256/256 points.

5. Communication port: RS485/RS232.

6. Supports Modbus RTU/ASCII, custom protocol RS, realize HMl or PC communication.

7. Advanced saving technology in case of power-down, the program is permanently saved.
8. Program undergoes encryption processing, it is optional to upload or not for protecting the user's intellectual property.`,
      },
    ],
  },
  HMI: {
    route: "/section/products",
    description:
      "HNC Electric provides various Human Machine Interface (HMI), including touch screen and text panel with different size and",
    itemsList: [
      {
        title: "H-BOX Series IoT Box",
        mainImg: HMI1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
          H-BOX is an IoT terminal device, it supports all the functions of the HT3000 except that it has no screen, you can use mobile phone, PAD, PC as its screen. Perfectly realize all functions of IoT through HNC cloud platform, cloud engine and cloud APP.

HNC Cloud is a cross-platform industrial Internet of Things cloud platform that supports PC, iPad, Android,and iOS multi-platform terminals. Simply put, HNC Cloud is a complete set of cloud service solutions forthe automation industry. It covers HNC Cloud website, cloud configuration, cloud HMI, cloud APP and other products. Through the HNC cloud platform, users can remotely access machines and equipment on the site thousands of miles away, realize remote monitoring and maintenance of HMI and PLC, realize remote programming, firmware upgrade, diagnosis, monitoring and debugging, etc. In summary, the HNC cloud platform has 9 major Features, it can help users realize the functions of cloud networking, cloud access, cloud video, cloud alarm, cloud engine, cloud management, cloud security, cloud translation and cloud map.

The HNC Cloud provides a secure communication mechanism. It uses 128-bit SSL encryption to ensure stable data transmission. A-Key and B-Key protection mechanisms are also set up on the device side to ensure the safety and reliability of remote access devices.



The IoT BUS APP supports iPad, Android, and iOS multi-platform terminals. Users can search for “IoT Bus” for free download through the major APP application stores.
          `,
        features: `
        1. 4G Flash+512M RAM. Small size, multi-function, high cost performance

2. Integrated HMI function, you can directly monitor the display screen through the mobile phone terminal/PC terminal insteadof t he HMI screen, the control is flexible and convenient

3. Innovative A/B Key security mechanism, multi-unit network, database, multi-screen interaction, cloud camera remote monitoring and other functions

4. Support MQTT protocol. Support access to database server, easily realize data collection and reporting, and dock with ERP/MES and other systems

5. Rail mounting. With two Ethernet interfaces, supporting star, tree, and bus Ethernet networking

6. Supports third-party SCADA. Built-in HNC cloud engine, integrated HNC cloud service, support cloud/mobile phone access control support edge computing. Realize edge computing through the built-in script engine, function calculation, and interaction with device data in the terminal

7. Support cloud transparent transmission. Can remotely program, upload and download, firmware upgrade, diagnosis,

8. Monitoring and debugging PLC program. Supports various third-party protocols to detect abnormal conditions at any time

9. Built-in a variety of industrial equipment drivers, support the current mainstream PLC, inverter, instrument
        `,
      },
      {
        title: "H-BOX-M Series IoT Box",
        mainImg: HMI2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
          Built-in 8 digital points. User can customize Dl/DO. Design for flexible application is more and cost-effective. 
Built-in Web API function, can control and obtain the device data through HTTP protocol.
Support configuration screen integration. Device screen can be integrated into various personalized scenes.
Support access to third-party loT platforms such as Alibaba Cloud, Amazon, Google, etc.
lntegrated HMl+RTU+loT Gateway functions all in one. Supports accessing through mobile APP/PC etc.
Management by HTCloud Designer. Built-in Cloud engine, integrated Cloud service Support base station positioning, IP positioning, device map viewing. Real-time device status can be viewed through mobile APP or large monitor screen.
          `,
        features: `
        1. Built-in IO points, integrated RTU functions

2. Web API Interface

3. Configuration Screen Integration

4. Multiple security protection mechanisms

5. Connect to database

6. Real-time alarm notification

7. MQTT protocal & Built-in MOTT server

8. Equipment manufacturer maintains identity

9. Cloud transparent transmission

10. Remote data interraction

11. Supports multiple protocols
        `,
      },
      {
        title: "HT3000-A Series IoT HMI",
        mainImg: HMI3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
          On the basis of satisfying functions of general HMI, HT3000 series HMI can also perfectly realize all functions of IoT through HNC cloud platform, cloud engine and cloud APP.

HNC Cloud is a cross-platform industrial Internet of Things cloud platform that supports PC, iPad, Android,and iOS multi-platform terminals. Simply put, HNC Cloud is a complete set of cloud service solutions forthe automation industry. It covers HNC Cloud website, cloud configuration, cloud HMI, cloud APP and other products. Through the HNC cloud platform, users can remotely access machines and equipment on the site thousands of miles away, realize remote monitoring and maintenance of HMI and PLC, realize remote programming, firmware upgrade, diagnosis, monitoring and debugging, etc. In summary, the HNC cloud platform has 9 major Features, it can help users realize the functions of cloud networking, cloud access, cloud video, cloud alarm, cloud engine, cloud management, cloud security, cloud translation and cloud map.

The HNC Cloud provides a secure communication mechanism. It uses 128-bit SSL encryption to ensure stable data transmission. A-Key and B-Key protection mechanisms are also set up on the device side to ensure the safety and reliability of remote access devices.



The IoT BUS APP supports iPad, Android, and iOS multi-platform terminals. Users can search for

“IoT Bus” for free download through the major APP application stores.
          `,
        features: `
        1. Connection in LAN: All models have built-in IIoT technology which enables local access and open interface without internet.

2. Video surveillance: HMI can connect with camera supporting RTSP or EZVIZ protocol by Ethernet. The camera can be watched on HMI and APP.

3. Cloud maintenance: It's easier for manufacturers to manage equipments by using remote maintenance function.

4. Video playing: You can play video on HMI. The supported formatis Mp4.

5. Web API: Users can get the data and control device on their own platform or software by Web API in local area network or over Internet.

6. Data security: The user data is not stored in HNC cloud. All the data can be stored in private or public server assigned by users.

7. MQTT protocol: MQTT protocol is supported and applied to the connection with ERP/MES/database.

8. IoT platform: All models support the connection to Alibaba Cloud IoT, AWS IoT and Google Cloud IoT Core.

9. Display integration: The display of HMI can be embeded in other applications such as software, website, APP and etc so that they have remote access to HMI. 

10. Remote centralized control: All the data of remote devices can be acquired through MQTT broker for centralized control. Users don't even need to deploy server if using cloud data center.

11. Text to speech: The English text can be converted into voice through built-in speaker. Audio files can also be played.

12. Voice intercom: All models support voice intercom, voice broadcast and remote intercom with APP.

13. Mobile scanner: You can turn your mobile phone into a barcode scanner and enter information everywhere. It's more convinient than external scanner.

14. Mobile authentication: The identity of operator can be verified by using NFC recognition or scanning a QR code with mobile phone.

15. RFID/NFC: HMI supports reading RFID tags and NFC recognition, which can be applied to user login and access control.

16. Digital display board: The production data, device state and video surveillance can be viewed on large screen by connecting with TVBOX. It can be applied to data visualization and centralized control.

17. Satellite positioning:Support Beidou positioning and trajectory tracking. Users can check the realtime position of devices. 
        `,
      },
      {
        title: "HT3000-B Series IoT HMI",
        mainImg: HMI4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
On the basis of satisfying functions of general HMI, HT3000 series HMI can also perfectly realize all functions of IoT through HNC cloud platform, cloud engine and cloud APP.

HNC Cloud is a cross-platform industrial Internet of Things cloud platform that supports PC, iPad, Android,and iOS multi-platform terminals. Simply put, HNC Cloud is a complete set of cloud service solutions forthe automation industry. It covers HNC Cloud website, cloud configuration, cloud HMI, cloud APP and other products. Through the HNC cloud platform, users can remotely access machines and equipment on the site thousands of miles away, realize remote monitoring and maintenance of HMI and PLC, realize remote programming, firmware upgrade, diagnosis, monitoring and debugging, etc. In summary, the HNC cloud platform has 9 major Features, it can help users realize the functions of cloud networking, cloud access, cloud video, cloud alarm, cloud engine, cloud management, cloud security, cloud translation and cloud map.

The HNC Cloud provides a secure communication mechanism. It uses 128-bit SSL encryption to ensure stable data transmission. A-Key and B-Key protection mechanisms are also set up on the device side to ensure the safety and reliability of remote access devices.

The IoT BUS APP supports iPad, Android, and iOS multi-platform terminals. Users can search for

“IoT Bus” for free download through the major APP application stores.
          `,
        features: `
1. 16 million true color TFT LCD, LED backlight, rich and real content. 4G Flash + 512M RAM.

2. Integrated HNC Cloud service, built-in HNC cloud engine. Support serial port / U disk / SD card / Ethernet / HNC cloud and other methods of program download.

3. Support third-party SCADA software programming management. Support cloud/mobile phone access control, strong operability.

4. Innovative A/B Key security mechanism, multilingual automatic translation, mobile payment support, weather forecast display.

5. Multi-screen networking. The innovative network networking method is easy, fast, convenient and practical. Support multiple terminal size screen custom display, multi-screen interactive management.

6. Support MQTT protocol. Can be connected to the database server, easily realize data collection and reporting, and dock with ERP/MES and other systems.

7. Support cloud transparent transmission. Can remotely program, upload and download, firmware upgrade, diagnosis, monitoring and debugging PLC program. Detect on-site abnormal conditions anytime and anywhere.

8. Support edge computing. Realize edge computing through the built-in script engine, function calculation, and interaction with device data in the terminal.

9. Support multiple third-party protocols. Built-in a variety of industrial equipment drivers, support the current mainstream PLC,VFD, instruments.

10. Integrated cloud access & alarm push, You can easily perform remote cloud access control on local or remote HMI devices through cloud APP and cloud website. Real-time abnormal monitoring alarm, the alarm information is pushed to the designated management personnel in real-time. Alarm notifications can be received via mobile APP, SMS, etc.
        `,
      },
      {
        title: "HT3000-D Series IoT HMI",
        mainImg: HMI5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
On the basis of satisfying functions of general HMI, HT3000 series HMI can also perfectly realize all functions of IoT through HNC cloud platform, cloud engine and cloud APP.

HNC Cloud is a cross-platform industrial Internet of Things cloud platform that supports PC, iPad, Android,and iOS multi-platform terminals. Simply put, HNC Cloud is a complete set of cloud service solutions forthe automation industry. It covers HNC Cloud website, cloud configuration, cloud HMI, cloud APP and other products. Through the HNC cloud platform, users can remotely access machines and equipment on the site thousands of miles away, realize remote monitoring and maintenance of HMI and PLC, realize remote programming, firmware upgrade, diagnosis, monitoring and debugging, etc. In summary, the HNC cloud platform has 9 major Features, it can help users realize the functions of cloud networking, cloud access, cloud video, cloud alarm, cloud engine, cloud management, cloud security, cloud translation and cloud map.

The HNC Cloud provides a secure communication mechanism. It uses 128-bit SSL encryption to ensure stable data transmission. A-Key and B-Key protection mechanisms are also set up on the device side to ensure the safety and reliability of remote access devices.

The IoT BUS APP supports iPad, Android, and iOS multi-platform terminals. Users can search for

“IoT Bus” for free download through the major APP application stores.
          `,
        features: `
          HT3000-D4


1. HD screen. Built-in quad-core high-performance processor, smoother operation, faster speed, stronger stability.

2. The real color and exquisite with IPS hard screen technology. lntegrated design, full-view visualexperience, immersive enjoyment.

3. Provide exclusive maintain identity for equipment manufacturers, as well as exclusive enterprise platforms. More convenient for equipment vendors.

4. Supports remote programming, download, diagnostics, monitoring and debugging of PLC programs.

5. Supported voice function, access microphone and loudspeaker via USB, Supported text-to-speech、voice broadcasting、intercom function、innovative device cloud voice.

HT3000-D15

1. Supports local video monitoring

2. Support for video playing

3. Remote Datalnteraction

4. Remote Access Monitoring

5. Remote data collection

6. Real-time exception alarm push

7. Docking ERP/MES and other databases

8. Remote Centralized Control


        `,
      },
    ],
  },
  "Controlador CNC": {
    route: "/section/products",
    description:
      "HNC CNC controllers adopt advanced open architecture, built-in Industrial Personal Computer (IPC). They integrates various interfaces for",
    itemsList: [
      {
        title: "HNC-808 series",
        mainImg: CNC1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
    The HNC-808 all-digital bus-type high-grade CNC system is designed for milling and turning processes to meet a wide range ofapplication needs: from standard milling machines, simple machining centers,to cycle-controlled lathes and full-function CNClathes.
          `,
        features: `
1. Supporting NCUC, EtherCAT bus protocol
2. Supporting16,000,000PPR high-precision encoder
3. Supporting high-speed asynchronous motor\permanentmagnet synchronous spindle motor
4. 8000rpm high-speed rigid tapping (permanent magnet synchronous spindle motor).
5. Supporting bidirectional 20000 points pitch error compensation(optional)
6. Customization(optional)
7. Supporting TCP\IP,Ethernet communicationprotocols
        `,
      },
      {
        title: "HNC-818 series",
        mainImg: CNC2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
    Reliable performance, maintenance free.

HNC-818 is applied for the extreme operating conditions. The fan and the hard disk don’t apply to the HNC-818, and the memory works without battery, so the control system is completely maintenance free.

Standard turning and milling functions.
With the system software based on the technical process, HNC-818 is the best choice of standard lathe and milling machine. HNC-818 can be used on vertical orordinary horizontal machining center, mould processing, and turning center with subspindle, live tool and Y axis.

Easy to operate.
With 8.4” /10.4” high resolution color LCD display, HNC-818 is very convenient to operate. There are USB andRJ45 interfaces on the front operation panel for the rapid and easy data transfer to machine tool.
          `,
        features: `
1. High-speed high-precision control
2. Max.acceleration rate is 1.8G(3G when linear motor is mounted)
3. Dual channel control (optional). Dual-axis synchronization control
4. Full-closed loop control (optical grating, magnetic grating)
5. Supporting bidirectional 20000 points pitch error compensation
6. Auto measurement
7. Supporting a variety of sensor interfaces 
8. Machine assembly quality analysis software(optional)
9. Customization
10. Touch screen (optional)
        `,
      },
      {
        title: "HNC-848 series",
        mainImg: CNC3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Stylish, reliable performance
HNC-848 adopts the modular, open architecture, NC and MPC structure of dual CPU module and17” LEDLCD.

Interface template switching function
The use of HNC-848 scripting technology allows HNC8 to have many functions that the traditional CNC system does not have,including skin replacement and multi-language. In consideration the user's habits, HNC8 HMI system provides a variety of interface templates, users can click to the familiar interface style, reducing the learning curve.

Usability integration technology
The traditional numerical control system is control-based, and HNC-848 is mainly for management. From control to management, the system integration reaches a new height. HMI can integrate local scripts, local dynamic libraries, native applications, and cloud applications with a variety of integration methods and less difficulties.

Highly open
The openness of CNC system is mainly reflected in four aspects: hardware openness, kernel openness, functional openness, and ecological openness. The openness of HNC-848 system hardware is reflected in hardware replaceability; the openness of kernel is reflected in the integration of IEC61131PLC editing tool; the functional openness is reflected in HMl, users can develop custom function modules; the ecological openness is reflected in cloud services. The CNC system can make full use of cloud resources.
          `,
        features: `
1. High-speed high-precision control
2. 5 simultaneously controlled axes, 5-axis auto calibration, 5-axis RTCP function, Large circular interpolation, Hyperbolic interpolation, 5-axis orientation machining
3. Synchronization control
4. Error compensation
5. Direct drive
6. Intelligent control
7. Lathe-mill combination
8. Multi-channel control
9. Seamless integration of CAM software
10. Touch screen
11. Backlash elimination for multiple motors
        `,
      },
      {
        title: "606T CNC controller for Turnning Machine",
        mainImg: CNC4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HNC606T is our latest developed, affordable system for cnc lathe & grinding machines. The control circuit adopted with high speed ARM processor (new industrial grade), large scale filed programmable gate array (FPGA ) technology, multi-layer PCB printed circuit board. The system itself has equipped with high integrated chips and surface mounting components, which brings a more compact and reasonable structure,a better guarantee of the system reliability and stability.

Key features: high speed real-time control(the max fast moving speed can reach to 30m/min, the max feed interpolation speed can up to 15m/min);high precision;using 800*600 lattice TFT LCD brightness adaptive technology ensured a longer service time, eliminated the disadvantage of display brightness varies with ambient temperature.English display menu,operations are very straightforward and convenient.

This is a two-coordinate linkage, open loop cnc system, representing very common application for cnc lathe.It has powerful functions, rich commands, being able to control the AC servo system directly.The programming codes are in accordance with ISO international standard. Choosing the relevant series of servo system from HNC Electric will guarantee you a better cost effective solution.
          `,
        features: `
1. Coordinate axes: 2 
2. Adopting high-speed ARM / DSP / FPGA / hardware interpolation technology
3. Max speed: 60m/min, Feed speed: 0.01…30m/min
4. USB interface
5. RS232 interface
6. Memory for part program: 32M,  No limit of the program number
7. Program pre-load for small line segment machining, ensure the continuous machining
8. Max Thread pitch: 1000mm
9. 54 series of G code, satisfy all kinds of machining
10. Automated Tool compensation, C tool compensation function
11. Automated chamfering and rounding function
12. Two-channel analog output, allow to control two spindle
        `,
      },
      {
        title: "606M CNC controller for Milling Machine",
        mainImg: CNC5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HNC606M is our latest developed, affordable system for CNC milling and machining center. The control circuit adopted with high speed ARM processor (new industrial grade), large scale filed programmable gate array (FPGA ) technology, multi-layer PCB printed circuit board. The system itself has equipped with high integrated chips and surface mounting components, which brings a more compact and reasonable structure,a better guarantee of the system reliability and stability.

Key features: high speed real-time control(the max fast moving speed can reach to 30m/min, the max feed interpolation speed can up to 15m/min);high precision;using 800*600 lattice TFT LCD brightness adaptive technology ensured a longer service time, eliminated the disadvantage of display brightness varies with ambient temperature.English display menu,operations are very straightforward and convenient.

This is a two-coordinate linkage, open loop cnc system, representing very common application for cnc lathe.It has powerful functions, rich commands, being able to control the AC servo system directly.The programming codes are in accordance with ISO international standard. Choosing the relevant series of servo system from HNC Electric will guarantee you a better cost effective solution.
          `,
        features: `
1. Coordinate axes: 5
2. Max linkage axes: 4
3. Adopting high-speed ARM / DSP / FPGA / hardware interpolation technology
4. Max speed: 60m/min, Feed speed: 0.01…30m/min
5. USB interface
6. RS232 interface
7. Memory for part program: 32M,  No limit of the program number
8. Program pre-load for small line segment machining, ensure the continuous machining
9. Max Thread pitch: 1000mm
10. 54 series of G code, satisfy all kinds of machining
11. Automated Tool compensation, C tool compensation function
12. Automated chamfering and rounding function
13. Two-channel analog output, allow to control two spindle
        `,
      },
      {
        title: "602T CNC controller for Turning Machine",
        mainImg: CNC6,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HNC602T is our latest developed, affordable system for cnc lathe & grinding machines. The control circuit adopted with high speed ARM processor ( new industrial grade), large scale filed programmable gate array (FPGA )technology, multi-layer PCB printed circuit board. The system itself has equipped with high integrated chips and surface mounting components, which brings a more compact and reasonable structure,a better guarantee of the system reliability and stability.

Key features: high speed real-time control(the max fast moving speed can reach to 30m/min, the max feed interpolation speed can up to 15m/min);high precision;using 800*600 lattice TFT LCD brightness adaptive technology ensured a longer service time, eliminated the disadvantage of display brightness varies with ambient temperature.English display menu,operations are very straightforward and convenient.

This is a two-coordinate linkage, open loop cnc system, representing very common application for cnc lathe.It has powerful functions, rich commands, being able to control the AC servo system directly.The programming codes are in accordance with ISO international standard. Choosing the relevant series of servo system from HNC Electric will guarantee you a better cost effective solution.
          `,
        features: `
1. Coordinate axes: 2 
2. Adopting high-speed ARM / DSP / FPGA / hardware interpolation technology
3. Max speed: 60m/min, Feed speed: 0.01…30m/min
4. USB interface
5. RS232 interface
6. Memory for part program: 32M,  No limit of the program number
7. Program pre-load for small line segment machining, ensure the continuous machining
8. Max Thread pitch: 1000mm
9. 54 series of G code, satisfy all kinds of machining
10. Automated Tool compensation, C tool compensation function
11. Automated chamfering and rounding function
12. Two-channel anolog output, allow to control two spindle
        `,
      },
    ],
  },
  "Servo Drive": {
    route: "/section/products",
    description:
      "HSD series servo drives can meet general requirements of machine buildings, automation controls with AC220V and AC380V power supply",
    itemsList: [
      {
        title: "SV-E3 Series Synchronous Servo System",
        mainImg: Servo1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
SV-E3 series synchronous servo driver is high performance servo drive, which can realize accurate position / speed / torque control. With intelligent power module (IPM) and other latest technology design, simple operation, high reliability, small size, easy to install.

SV-E3 servo system adopt 17-bit incremental or absolute encoder. Complete commissioning software help customer observe servo situation easily.

It can cover a big range of servo motor, from 50W to 2KW, with low inertial, middle inertial and high inertial options.

SV-E3 series servo system can be used in robots, electronic machines, machine tools, packaging and printing machine, automation equipment and etc.
          `,
        features: `
1. High Precision / Compact design / Powerful Rigidity
2. Input Voltage: Single phase AC 220V / Three phase AC 220V
3. Power range: 50W~2kW
4. 17-bit absolute / incremental encoder options
5. Reliable thermal design, all with cooling fan
6. RS485 communication
7. Control mode: Position/speed/torque/Internal position
8. 4M pulse input frequency
9. High-contrast LCD display
10. 8 DI / 8 DO
11. Commisioning Software
12. Homing fuction
13. Low/High/Medium inertia servo motor options, brake options
14. IP65 
        `,
      },
      {
        title: "HSD7 Series High-end Synchronous Servo Drive",
        mainImg: Servo2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSD7 new series high-end synchronous AC servo driver adopt the advanced control algorithm, support mainstream protocol such as MODBUS, CANOPEN, EtherCAT, MECHATROLINK which can realize speed and accurate position control. With intelligent power module (IPM) and other latest technology design, simple operation, high reliability, small size, easy to install.

Encoder resolution can up to 24bits, support 17bit increamental and 17bit/23bit/24bt absolute type encoder. 
STO &Full colse loop function is optional.
Speed loop response frequency up to 3.1KHz.
Adjustment-free function,  Self-tuning function.
Friction&backlash compensation function.
This servo driver has mature servo technology and the highest cost performance.
          `,
        features: `
1. Main circuit power supply:  Three-phase AC220V, 50/60Hz;  Three-phase AC380V, 50/60Hz;
2. Speed loop response frequency up to 3.1KHz.
3. Adjustment-free function,  Self-tuning function.
4. Debugging software with powerful function, friendly interface and easy-to-use.
5. Friction&backlash compensation function.
6. STO &Full colse loop function is optional.
7. Control mode: Position control, Speed control, Torque control, JOG operation, speed contact, etc.
8. Encoder feedback:
Ordinary incremental encoder: 2500 lines incremental standard type, 2500 lines incremental saving line type.
Serial encoder：17bits/ 23bits/24bits absolute value encoder.
9. Communication: Standard MODBUS, CANOPEN, EtherCAT, MECHATROLINK.
10. Speed control range: 1:5000（ in the stable running without crawling at the rated load）;
11. Digital Input terminal: photoelectric coupling  isolation, functional programmable, can realize servo ON (/ S - ON), Paction (/P - CON), not forward the side drive (P-OT), not reverse side drive (N-OT), alarm reset (/ALM-RST), forward side torque limit (/P-CL), internal set speed switch and so on.
12. Digital output terminal: functional programmable, can realize servo alarm (ALM), position completion (/COIN), speed consistency inspection (/V-CMP), servo motor rotation detection (/TGON), servo ready  (/S-RDY),  torque limit detection (/CLT), brake (/BK), encoder zero output (PGC).
13. Over travel (OT) prevention function: Dynamic brake (DB) stopping, decelerate stopping, or free running stop when it is at P-OT, N-OT input action.
14. Protection function: Over current, overvoltage, under voltage, overload, over speed, regeneration fault, encoder feedback error, etc.
        `,
      },
      {
        title: "HSD2 Series Synchronous Servo Drive",
        mainImg: Servo3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSD2 series synchronous ac servo driver is designed and manufactured, employing the advanced control algorithm based on the market demand, which can realize speed and accurate position digital control. With intelligent power module (IPM) and other latest technology design, simple operation, high reliability, small size, easy to install.

Cover a big range of servo motor, up to 5.5KW.

This servo driver has mature servo technology and the highest cost performance.
          `,
        features: `
1. Speed range: Steady speed operation of the highest speed up to 5000 RPM, minimum speed 0.1 RMP.
2. Overload ability: torque can be up to 3 times of the rated load.
3. High dynamic response: speed loop bandwidth can reach 300 hz, process and load speed change little.
4. Input/output terminal: light coupling isolation, functional programmable, input terminal can realize servo enabled, alarm clear, torque limit and emergency stop, and other functions, output terminal can be controled with switch, relay and open collector triode, using darlington photoelectric coupler for output, can be connected with relay and photoelectric coupler, interfaces are more convenient to use.
5. Analog command control: speed, torque Shared a analog control, can difference or single-ended input, range - 10 v ~ + 10 v.
6. Position control mode: high speed light coupling isolation plus/signal signals, CCW/cw + signal and A/B phase + signal control mode, and employs the difference or single-terminal pulse receive mode, can effectively restrain the interference, optional instruction pulse smooth filtering, make the system in deceleration process smooth operation, increase the pulse signal digital filter and detection way.
7. Resonance inhibition: can rise to inhibit resonance effect by adjusting the internal parameters
8. Encoder signal output: encoder signal frequency division and then drive output through line
9. Protection function: over voltage, over current, overload, overspeed and encoder anomaly and other kinds of error detection mechanism, nip in the bud.

 
        `,
      },
      {
        title: "HSD6 Series Synchronous Servo Drive",
        mainImg: Servo4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSD6 series synchronous AC servo driver adopt advanced control algorithm, support mainstream protocol such as MODBUS, CANOPEN, EtherCAT, Encoder resolution up to 23bits. response up to 3.0KH.

Encoder resolution can up to 24bits, support 17bit increamental and 17bit/23bit/24bt absolute type encoder. 

STO &Full colse loop function is optional.

Speed loop response frequency up to 3.1KHz.

Adjustment-free function,  Self-tuning function.

Friction&backlash compensation function.

This servo driver has mature servo technology and the highest cost performance.
          `,
        features: `
1. Adjustment-free function

2. Speed response is greatly improved

3. Support multiple encoder types

4. Dynamic braking function

5. Vibration suppression function

6. Support multiple communication interfaces to realize high-speed and high-precision control

7. Efficient and convenient debugging software
        `,
      },
      {
        title: "HSV-180AD AC380V Servo Drive",
        mainImg: Servo5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSV-180AD digital AC servo drive is a high-voltage feed drive based on HSV-18D. The drive unit uses AC 380V power input, and features compact architecture, easy operation, and high reliability.

HSV-180AD digital AC servo drive unit uses the latest technology such as digital signal processor (DSP) for motion control and intelligent power module (IPM) to achieve a closed-loop servo control of position, speed, and torque for permanent magnet AC synchronous servo motors. HSV-180AD digital AC servo drive unit provides protection functions for short circuit, overcurrent, overvoltage, undervoltage, overload, overheat, and pump. It integrates communication interface, pulse input interface, analog input interface, and small keypad debugging digital display.
          `,
        features: `
1. High Performance AC digital servo drive

2.Easy and flexible control (five control modes)

3. Full state display

4. Various interface and control modes

5. Applicable to situations that requires high speed and high power

6. Double encoder interfaces that can be connected to position feedback components such as grating ruler to form full-closed loop position control system
        `,
      },
      {
        title: "HSV-180AS Spindle Servo Drive",
        mainImg: Servo6,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSV-180AS digital AC spindle servo drive is a high-voltage feed drive based on HSV-18S. The drive unit uses AC 380V power input, and features compact architecture, easy operation, and high reliability.

HSV-180AS digital AC spindle servo drive unit uses the latest technology such as digital signal processor (DSP) for motion control and intelligent power module (IPM) to achieve a closed-loop servo control of position, speed, and torque for permanent magnet AC synchronous servo motors. HSV-180AD digital AC spindle servo drive unit provides protection functions for short circuit, overcurrent, overvoltage, undervoltage, overload, overheat, and pump. It integrates communication interface, pulse input interface, analog input interface, and small keypad debugging digital display.
          `,
        features: `
1. High Performance AC digital servo drive

2.Easy and flexible control (five control modes)

3. Full state display

4. Various interface and control modes

5. Applicable to situations that requires high speed and high power

6. Double encoder interfaces that can be connected to position feedback components such as grating ruler to form full-closed loop position control system
        `,
      },
      {
        title: "HSD2000 AC380V Servo Drive",
        mainImg: Servo7,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSD2000 has perfect performance thanks to 64bit DSP, high performance FPGA, and the newest motor control algorithm. It could drive synchronous servo motor and asynchronous servo motor, as well as induction motors. Available for pulse / analog / field bus / digital input signal / keyboard control, and supports all types of encoders including incremental, SinCos, absolute, The power range is from 2.2KW up to 132KW.  
          `,
        features: `
1.  Employed DSP+FPGA, reliability and performance is improved markedly High performance/ 

High flexibility / Strong over-load ability   

2. Perfectly work as AC synchronous servo drive and asynchronous servo drive, can drive: 

synchronous servo motor (position control), asynchronous servo motor and induction motors.

3. Speed mode/ torque mode/ servo mode/spindle drive mode optional 
   A. Speed mode 
Open loop：For most of applications, like Cranes, CNC spindle  
Close loop： For the applications require higher speed accuracy, e.g elevator, harbor cranes:  
   B.  Torque mode： 
Open loop：General winding applications, e.g leather winding, film winding 
Close loop： Winding applications requires high tension accuracy, with winding diameter calculation,  e.g steel panel winding.  
  C.  Servo mode： 
Pulse tracking： Usually co-work with CNC controller or other upper computer 
Positioning： CNC spindle positioning, internal digital positioning. 
  D.  Spindle mode.

4. Auto-turning of synchronous servo motor pole angle, no need zeroing, match all brands of servo motor easily  
5. Easy operation: pulse control / filed bus control / IO control / analog control  
6. Under servo mode, positioning accuracy is less than ±1 pulse  
7. Close-loop vector control, speed ratio is up to 1:5000,can achieve high speed accuracy  
8. Time-sharing control of 2 motors with different parameters  
        `,
      },
    ],
  },
  "Invertidor de Frecuencia": {
    route: "/section/products",
    description:
      "HNC Electric designs complete products range of AC frequency inverters with high stability and high performance. Various Special types",
    itemsList: [
      {
        title: "HV320 Series Frequency Inverter",
        mainImg: Freq1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
    The HV320 series is a new series of inverters launched on the basis of fully investigating market demand and listening to customer feedback, with highly integrated performance and functions. Modular design, standard STO, rich expansion cards such as communication card,PG card, I/O card, and special models for various industry applications.

HV320 has industry-leading drive performance and functional control, and adopts a unique current vector control algorithm to efficiently drive asynchronous/synchronous motors to achieve high-precision, high-torque, and high-performance control.

Exquisite appearance design, reliable hardware structure, detachable keyboard, dual display, independent air duct, powerful functions, rich macro parameters, etc. These optimized designs make the HV320 series an industry-leading product, bringing tangible benefits to customers. 

Customer success, market service!

HV320 is trustworthy in both performance and control!
          `,
        features: `
1. Advanced motor control technology support Open/Close loop vector control and V/F control. 

2. Modular design improves reliability, facilitates customer maintenance, reduces after-sales costs.

3. Built-in two STO (Safe Torque Off) terminals makes the system safer and more reliable.

4. Built-in Modbus RTU. Optional: PROFIBUS-DP, PROFINET, EtherCAT,Modbus TCP, EtherNET/IP,CANlink.

5. Optional motor overheat expansion card accepts motor temperature sensor input(PT100/PT1000).

6. A variety of PG cards are available, supporting differential, open collector, resolver, etc.

7. A variety of I/O expansion cards are available to meet customers' different application needs.

8. Double-line digital display, can display more content, LCD keypad is optional.

9. Special models for various industries such as solar pump, PMSM, winding and unwinding,

10. Different input voltage(220V single phase/220V 3 phase/380V 3 phase/460V 3 phase).

11. High starting torque characteristics and precise speed control.

12. Programmable DI/DO/AI/AO, and Modbus RTU make easy communication with other devices.

13. Independent air duct design prevents dust from contacting the circuit board, better heat dissipation performance.

14. Integrated multi-speed function support most of texitile application.
        `,
      },
      {
        title: "HV100W Series Frequency Inverter",
        mainImg: Freq2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
    HV100W series is a general current vector control inverter integrated with the performance and features in a high degree, and high protection level (IP65). HV100W with industry-leading drive performance and functionality control, using unique current vector control algorithm can efficiently drive induction motor to achieve high accuracy, high torque and high-performance control.

Exquisite appearance design, reliable hardware structure,dual display, independent air duct, powerful functions, rich macro parameters .ect. These optimized designs make HV100W series an industry-leading product and bring tangible benefits to customers. 

Customer success, Market Service！

HV100W in terms of performance and control are worthy of trust!
          `,
        features: `
1. Advanced motor control technology support Open loop vector control(SVC) and V/F control. 

2. High protection level (IP65) is designed for unprotected use in all outdoor and bad environments.

3. Double-line digital display, can display more content

4. Powerful macro function, one-key setting, saving customer debugging time

5. Different input voltage(220V single phase/220V 3 phase/380V 3 phase/460V 3 phase).

6. High starting torque characteristics and precise speed control.

7. Upgrade I/O(NPN/PNP compatible) can meet more application requirement.

8. Programmable DI/DO/AI/AO, and Modbus RTU make easy communication with other devices.

9. Independent air duct design prevents dust from contacting the circuit board, better heat dissipation performance.
        `,
      },
      {
        title: "HV10 Series Mini Design Frequency Inverter",
        mainImg: Freq3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HV10 is the newest AC inverter with compact design from HNC Electric, thanks to advanced current vector control algorithm and newest hardware, HV10 has high stability and perfect motor control performance. Based on listening and understanding of customers’ requirement, HV10 supports full range of input voltage ( AC 120V / 220V / 380V / 460V and etc.) , complete functions for different countries and applications.

* Mini design housing suitable for micro automation such as packaging, labeling machine, conveyor belt etc.

* Double-line digital display, can display more content

* Detachable keyboard, external keyboard, convenient for customer debugging

* Powerful macro function, one-key setting, saving customer debugging time

* Built-in EMC C3 filter, stronger anti-electromagnetic interference ability

* Independent air duct design prevents dust from contacting the circuit board, better heat dissipation performance

* Installation back mounting system can insert the inverter directly into the rack 

* Programmable DI/DO/AI/AO as well as RS485 Modbus RTU make easy communication with other devices 

* Integrated PID function support most of water supply applications 

* Integrated multi-speed function support most of texitile application
          `,
        features: `
1. Mini design housing suitable for micro automation such as packaging, labeling machine, conveyor belt etc.

2. Double-line digital display, can display more content

3. Detachable keyboard, external keyboard, convenient for customer debugging

4. Powerful macro function, one-key setting, saving customer debugging time

5. Built-in EMC C3 filter, stronger anti-electromagnetic interference ability

6. Independent air duct design prevents dust from contacting the circuit board, better heat dissipation performance

7. Installation back mounting system can insert the inverter directly into the rack 

8. Programmable DI/DO/AI/AO as well as RS485 Modbus RTU make easy communication with other devices 

9. Upgrade I/O(NPN/PNP compatible) can meet more application requirement.

10. Integrated PID function support most of water supply applications 

11. Integrated multi-speed function support most of texitile application
        `,
      },
      {
        title: "HV100 Series High Performance Frequency Inverter",
        mainImg: Freq4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
New HV100 series is a general current vector control inverter integrated with the performance and features in a high degree. HV100 with industry-leading drive performance and functionality control, using unique current vector control algorithm can efficiently drive induction motor to achieve high accuracy, high torque and high-performance control.

Exquisite appearance design, reliable hardware structure, detachable keyboard, dual display, independent air duct, powerful functions, rich macro parameters .ect. These optimized designs make HV100 series an industry-leading product and bring tangible benefits to customers.

Customer success, Market Service！

HV100 in terms of performance and control are worthy of trust!
          `,
        features: `
1. Advanced motor control technology support Open loop vector control(SVC) and V/F control. 

2. Double-line digital display, can display more content

3. Powerful macro function, one-key setting, saving customer debugging time
4. Different input voltage(220V single phase/220V 3 phase/380V 3 phase/460V 3 phase).

5. High starting torque characteristics and precise speed control.

6. Suitable for all regions which have different grid and voltage.

7. Upgrade I/O(NPN/PNP compatible) can meet more application requirement.

8. Programmable DI/DO/AI/AO, and Modbus RTU make easy communication with other devices.

9. Detachable keyboard，support keyboard extension, convenient for customer debugging.

10. Independent air duct design prevents dust from contacting the circuit board, better heat dissipation performance.

11. Installation back mounting system can insert the inverter directly into the rack.

12.  Integrated multi-speed function support most of texitile application.
        `,
      },
      {
        title: "HV480 Series High Performance Frequency Inverter",
        mainImg: Freq5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
New HV480 series is a general current vector control inverter integrated with the performance and features in a high degree. HV480 with industry-leading drive performance and functionality control, using unique current vector control algorithm can efficiently drive induction motor to achieve high accuracy, high torque and high-performance control.

Detachable keyboard，support copy parameters by keypad, debugging software on PC, built-in EMC filter, reduce EMC interference, .ect. These optimized designs make HV480 series an industry-leading product and bring tangible benefits to customers.

Customer success, Market Service！HV480 in terms of performance and control are worthy of trust!
          `,
        features: `
1. Advanced motor control technology support Open loop vector control(SVC) and V/F control. 

2. Different input voltage(220V single phase/220V 3 phase/380V 3 phase/460V 3 phase).

3. High starting torque characteristics and precise speed control.

4. Rich and flexible I/O accesses and field bus options.

5. Suitable for all regions which have different grid and voltage.

6. Upgrade I/O(NPN/PNP compatible) can meet more application requirement without controller(PLC) 

7. Programmable DI/DO/AI/AO, and Modbus RTU make easy communication with other devices.

8. Detachable keyboard，support copy parameters by keypad, support keyboard extension. 

9. Debugging software, suitable for parameter set, waveform monitor, optimizing device performance.

10. Multi-pumps control, constant pressure water supply function.

11. Built-in EMC filter, reduce EMC interference , reduce malfunctions and improve accuracy.

12. Kinds of communication cards are available, Easy to integrate into the network to help Industry 4.0.
        `,
      },
      {
        title: "HV610 Series High Performance Frequency Inverter",
        mainImg: Freq6,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
New HV610 series is a general current vector control inverter integrated with the performance and features in a high degree. HV610 with industry-leading drive performance and functionality control, using unique current vector control algorithm can efficiently drive induction motor to achieve high accuracy, high torque and high-performance control.

Detachable keyboard，support copy parameters by keypad, debugging software on PC, built-in EMC filter, reduce EMC interference, ,ect. These optimized designs make HV610 series an industry-leading product and bring tangible benefits to customers.

Customer success, Market Service！HV610 in terms of performance and control are worthy of trust!
          `,
        features: `
1. Advanced motor control technology support Open loop vector control(SVC), Closed loop vector control(FVC) and V/F control. 

2. Different input voltage(220V single phase/220V 3 phase/380V 3 phase/460V 3 phase).

3. High starting torque characteristics and precise speed control.

4. Rich and flexible I/O accesses and field bus options.

5. Suitable for all regions which have different grid and voltage.

6. Upgrade I/O(NPN/PNP compatible) can meet more application requirement without controller(PLC) 

7. Programmable DI/DO/AI/AO, and Modbus RTU make easy communication with other devices.

8. Detachable keyboard，support copy parameters by keypad, support keyboard extension. 

9. Debugging software, suitable for parameter set, waveform monitor, optimizing device performance.

10. Kinds of PG cardse, match kinds of encoder type for high performance closed vector loop control. 

11. Multi-pumps control, constant pressure water supply function. 

12. Built-in EMC filter, reduce EMC interference , reduce malfunctions and improve accuracy.

13. Kinds of communication cards are available, Easy to integrate into the network to help Industry 4.0.
        `,
      },
      {
        title: "HV580L Series Elevator Inverter",
        mainImg: Freq7,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HV580L series frequency inverter is the professional for elevator of HNC. It concludes below improvement & innovation based on the ordinary V/F inverter. With the high-end design and high quality and reliability, HV580 series inverter will bring the users all new experience.

1. Smooth ride performance
2. Integrated brake control
3. Default factory setting user friendly factory, get you started quickly.
4. 4-Indepenent S-Ramps
5. Programmable DC –injection braking
6. Complete functions for elevator application
          `,
        features: `
HV580L series elevator inverter has Perfect performance:

1. Simplified parameter for easy start up

2. Comprehensive trip diagnostics

3. High start torque 180%/0Hz at FVC

4. Automatic torque boost

5. Slip compensation

6. Flexible programmable I/O connection

7. Output frequency 0~300Hz

8. In-built dynamic braking unit

9. To protect the mechanical torque limitation

10. High starting torque feature.

11. Superior responsiveness

12. Motor overheating protection

13. Prompt current limit function
        `,
      },
      {
        title: "HRS Series High Performance Soft Starter",
        mainImg: Freq8,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HRS series of soft starter is the latest development of HNC has an international leading technology of intelligent AC motor soft starter. HHS Series Soft Starter uses the power electronic technology, the microprocessor technology and the modern control theory technology, has the present international advanced level the new starting equipment. This product can effectively limit the starting current of asynchronous motor, which can be widely used in fan, water pump, compressor and other transportation and heavy equipment, is the star delta conversion, autotransformer, magnetron step-down start ideal replacement equipment.

HRS series of soft starter has excellent performance with the international high-end soft starter of the same, further strengthen the product reliability and environmental adaptability, humanization and professional design, can meet various application requirements.
          `,
        features: `
1. Multi start mode:

The maximum output torque can be obtained by the voltage ramp mode. The maximum current can be obtained by the constant current soft starter mode, which can be applied to the load with large static friction force

2. High reliability:

The high performance microprocessor is used to process the signal in the control system, so as to avoid the excessive adjustment of the analog circuit in the past, so as to obtain excellent accuracy and execution speed

3. High performance:

*Programmable delay start mode, programmable interlocks control

*No sequence requirements for input power

*Starting time, parking time can be modified

*Dynamic fault memory function, easy to find the cause of the fault, up to ten faults can be recorded

4. Field bus full dynamic control monitoring starter, easy networking:

Bus type is MODBUS.

5. Variety of protection functions:

Protection against over voltage, under voltage, over temperature, phase loss, motor overload, etc.

6. English character display function:

LCD display a variety of operating parameters, programming and fault state with text prompts

7. Perfect humanized design:

*Beautiful appearance and reasonable structure

*Perfect function and simple operation

*Solid, reliable and compact

*The artistic design of industrial products

8. Reliable quality assurance:

*Computer simulation design

*STM patch production process

*Excellent electromagnetic compatibility

*High temperature aging, vibration test before the factory

9. Quick and thoughtful after-sales service:

*Reliable performance and quality lay the foundation for quality service

*Provide excellent and complete equipment design

*Timely and thoughtful use of consulting

*Continuously improve product performance according to user opinion

 
        `,
      },
    ],
  },
  "Motor Spindle": {
    route: "/section/products",
    description:
      "HSM series servo motors provide AC220V / 380V products. Selection of high temperature resistance, high-energy product quality permanent",
    itemsList: [
      {
        title: "GM6 series spindle motor",
        mainImg: Spindle1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
GM6 series of AC servo spindle motor can be used with various high, medium and low-grade spindle AC servo drives to perform closed-loop control operation and achieve excellent performance. GM7 AC servo spindle motor is widely used in the fields that requires AC servo spindles such as CNC machine tools, building materials, blow moulding machines, textile, light industry, metallurgy, transportation lines.

GM6 series of AC servo spindle motors consist of stator, rotor, low-noise fans, and high-precision encoder (not required for open-loop control). Based on the structural optimization design and magnetic circuit optimization, GM7 series of AC servo spindle motors adopt the special class F insulation, complete machining, and high-precision dynamic balancing process.
          `,
        features: `
1. Brand new electromagnetic design scheme, tailor-made for the machine tool industry
2. Equipped with high-precision encoder, higher positioning accuracy
3. Brand new structure design, using closed heat dissipation channel, lower temperature rise
4. High efficiency and energy saving
5. The constant power range is wider and the low speed torque is greater
6. Using a new manufacturing process, the performance is more stable
        `,
      },
      {
        title: "GM7 series spindle motor",
        mainImg: Spindle2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
GM7 series of AC servo spindle motor can be used with various high, medium and low-grade spindle AC servo drives to perform closed-loop control operation and achieve excellent performance. GM7 AC servo spindle motor is widely used in the fields that requires AC servo spindles such as CNC machine tools, building materials, blow moulding machines, textile, light industry, metallurgy, transportation lines.

GM7 series of AC servo spindle motors consist of stator, rotor, low-noise fans, and high-precision encoder (not required for open-loop control). Based on the structural optimization design and magnetic circuit optimization, GM7 series of AC servo spindle motors adopt the special class F insulation, complete machining, and high-precision dynamic balancing process.
          `,
        features: `
1. Compact structure, small size, light weight, and high power density

2. Special design, small electromagnetic vibration, low noise, high rotation precision, constant torque and wide constant power speed range

3. Small rotor inertia and rapid response

4. Uniform air gap, high-precision balance, small torque ripple

5. Fully sealed design, high protection class (IP54)

6. Special Class F insulation, anti-surge current and anti-corona, long life, and reliable operation

7. High price and performance ratio
        `,
      },
    ],
  },
  "Motor AC Servo": {
    route: "/section/products",
    description:
      "HNC Electric offers full range of accessories of automation & drive products, e.g. reducers, braking unit, reactors, transformer, etc.",
    itemsList: [
      {
        title: "HSM (AC380V) Series Servo Motor",
        mainImg: AC1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSM series servo motors provide AC220V / 380V servo motor. With four series of dimensions: 180mm, 190mm, 260mm, 315mm in AC 380V series; four series of rated speeds: 1500rpm, 2000rpm, 2500rpm, 3000rpm. Motor configure standard 2500P/R incremental encoder or resolver. Selection of high temperature resistance, high-energy product quality permanent magnetic material，optimal design of the electromagnetic parameters, can maintain the motor a good working condition and fast response on long-running. The motor apply to the industrial environment in particular.
          `,
        features: `
1. Ultra energy saving
2. High response and accuracy
3. Low noise & low temperature rise
4. High reliability, less maintaining work caused
5. Low rotor inertia, which improves system rapidity
6. Small size, High speed & high torque
7. 2500PPR encoder/ resolver, 17 bit encoder is available to increase the accuracy
8. Employed shift current of D-P axis control, improved torque control accuracy up to 2%
9. Flexible customizing is available.
        `,
      },
      {
        title: "HSM (AC220V) Series Servo Motor",
        mainImg: AC2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HSM series servo motors have four series of dimensions, 60mm、80mm、110mm、130mm、150mm、180mm；four series of rated speeds 1500rpm、2000rpm、2500rpm、3000rpm. Motor configure standard 2500P/R incremental encoder. Selection of high temperature resistance, high-energy product quality permanent magnetic material，optimal design of the electromagnetic parameters, can maintain the motor a good working condition and fast response on long-running. IP65 protection, the motor apply to the industrial environment in particular.
          `,
        features: `
1. Compact architecture and high power density            

2. Middle rotor inertia and rapid response          

3. Super high coercivity rare earth permanent magnet

4. Overheat protection capability 

5. Strong anti-demagnetization capability

6. Various frame installation size                

7. Full-closed design
        `,
      },
    ],
  },
  Accesorios: {
    route: "/section/products",
    description:
      "HC series programmable logic controllers with high reliability, high performance and high speed features have been applied in many",
    itemsList: [
      {
        title: "HNC Braking Unit",
        mainImg: Accessory1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
*HBU series Braking Unit   HBU series of brake unit is the effective braking parts for all brands of frequency inverter.

*Consuming of renewable energy (motor during deceleration) forms of energy consumption in the braking resistor; 

play the braking performance and shorten the braking time of the inverters.;

*Applicable to a variety of inverter;

*With alarm output protection features, include overcurrent, overheating, internal short-circuit

*HBU series of brake unit is one of the safest braking unit for the inverters in the market.
          `,
        features: `
    1. Allow to apply in the large-power-fluctuation applications.;

2. Complete short-circuit protection function, therefore resistance short-circuit will not damage the inverter;

3. Special design, apply to ordinary resistance, don't need to choose no-sense resistance;

4. The voltage automatic tracking, users do not have to adjust voltage setting;

5. The noise filter, no interfere with the other equipment;

6. Excellent cost-performance, power is complete, each power range have single machine braking unit can be selected, no need parallel;

7. Custom made based on different voltage-grade is available.

8. Braking resistance as a choice, brake unit could be custom made based on user’s requirement.
        `,
      },
      {
        title: "Gear Boxes",
        mainImg: Accessory2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
HNC Planetary gearbox is standard mechanical component for servo motor application. It can support HNC HSM220/HSM380/GK6 servo motor and third party servo motor(customization is available).

Using advanced CNC machine manufacturing process as well as heat treatment the planetary gearbox can be widely used in plenty of applications such as packaging machine, CNC router/cutter machine, servo conveyor , feeder etc. with high torque output, stable running and maintenance-free features. 
          `,
        features: `
1. Various gearbox type which can meet different application requirements

2. Various gear ratio selection as well as customized flange available

3. Maintenance-free thanks to high feature lubrication systems

4. High torque output ability due to high performance bearing system design

5. Low noise when running

6. Compact design which can save space for mechanical installation
        `,
      },
    ],
  },
  Sensores: {
    route: "/section/products",
    description:
      "The new HNC sensor is finally here!Good quality / Great EMC features / Long-life Design / High precisionAdhering to the principle of",
    itemsList: [
      {
        title: "Rotary Encoder",
        mainImg: Sensor1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Complete models: 

The product series includes solid shaft, hollow shaft, half-hollow shaft and cone shaft models, servo-specific encoders, and wire encoders.

Such as:
Size: Φ25mm/Φ30mm/Φ38mm/Φ48mm/Φ58mm/Φ60mm/Φ80mm/Φ100mm
Resolution: 

100PPR/200PPR/300PPR/360PPR/400PPR/500PPR/600PPR/1000PPR/1024PPR/2000PPR/2048PPR/2500PPR/5000PPR

Rotary encoder is a displacement sensor that integrates mechanical, optical and electrical technologies. Through photoelectric conversion, mechanical displacement such as angular displacement and angular velocity can be converted into corresponding electrical pulses. It is mainly used for speed measurement, positioning, counting and other applications.
          `,
        features: `
1. All series are metal housings, high protection level 

2. Optimized circuit design, good EMC and high accuracy

3. Multiple output type options

4. Installation size compatible with mainstream brands, easy to replace

5. Components are well-known brands, guaranteed

6. Small size, light weight and easy installation 

7. Suitable for a variety of automation equipment

8. Can be customized
        `,
      },
      {
        title: "Proximity Sensor",
        mainImg: Sensor2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
            Complete model: Capacitive / Inductive / Hall in Square and cylindrical sensor. Can detect metal, non-metal, magnet and other materials, such as:

Cylindrical Diameter: 4mm/5mm/8mm/12mm/18mm/30mm

Detection distance: 1mm/1.5mm/2mm/4mm/5mm/8mm/10mm/15mm

Proximity sensors are a general term for sensors that replace contact detection methods such as limit switches and travel switches, and monitor objects without contacting the detection object. He can convert the movement information and presence information of the detection object into electrical signals.
          `,
        features: `
1. Suitable for multiple applications with high performance
2. Metal case for easy installation and protection
3. Brilliant indicator light for easy viewing of work status
4. Internal glue, fixed circuit board, good shock resistance
5. Optimized circuit design, good EMC performance
6. The wrong polarity of the power supply will not damage the product
        `,
      },
      {
        title: "Photoelectric Sensor",
        mainImg: Sensor3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Complete models: including diffuse reflection, retro-reflection, and through-beam type.

Various installation methods: including cylindrical installation and square installation.

Large monitoring range: from 5cm to 50m, according to your needs, we provide the most suitable products for you.

Photoelectric sensors are sensors that use various properties of light to detect the presence or absence of an object and change in surface state. They are mainly composed of a light-emitting projection unit and a light-receiving unit that receive light. If the projected light is blocked or reflected depending on the detection object, the amount of light reaching the light-receiving part will change. The light receiving unit detects this change and converts it into an electrical signal for output.
          `,
        features: `
1. Optimized circuit design, strong anti-interference ability

2. High reliability and high accuracy

3. Metal case for easy installation and protection

4. Adjustable sensitivity

5. Suitable for multiple applications

6. Compact design with built-in amplifier

7. Far distance detection
        `,
      },
      {
        title: "Area Sensor",
        mainImg: Sensor4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
The area sensor is a multi-purpose automatic control product that uses infrared scanning technology. The transmitting device and the receiving device are installed on both sides, and the internal part is composed of electronic circuits, so that the infrared transmitting and receiving unit forms a warning barrier under a high-speed scanning state. When people and objects enter the area, the control system quickly converts the output level signal to make the load Action, when people and objects leave the area, the load is automatically closed to achieve the purpose of detection. This product is widely used in elevator, highway, object detection, forging machinery, plastic machinery and other area control industries.

Warning:  

Do not use this area sensor for dangerous machines, as it is not a kind of safefy protection device. They are mostly applied for counting and positioning.
          `,
        features: `
1. Strong anti-interference ability

2. Optical synchronization technology, reliable performance

3. Flexible design and quick installation

4. Customizable outdoor light-resistant products
        `,
      },
    ],
  },
};

export const Solutions: solutionsIndexed = {
  "Empaques e Impresiones": {
    img: packages,
    route: "/section/solutions",
    description:
      "Lighting up your life with HNC automation and drive technology!",
    itemsList: [
      {
        title: "HNC VFDs and Servo For Aseptic Filling Machine",
        mainImg: print1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
          Application Description
– The medium is heated following filling (in a purified bottle) together with the bottle in the so-called pasteurizer
– The medium is heated shortly before the filler
– Typical products include tea, 100% juices, drinks with a pH value higher than 4.5 (i.e. bacterially sensitive products). This is often followed by aseptic filling
– Filling is carried out in a clean room. Previously the complete filler was in a clean room, nowadays only the actual filling process is located in a clean room
 
Technology Requirement
– 2~5 servo axis per machine or 1 big motor drive with gearbox
– Synchronous operation and position control
– Power: 12000~40000 bottles/ hr
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration/ emergency stop
– Angular synchronous operation with external encoder
– Servo technology in high end machine(every filler has one servo motor)
 
          `,
        features: `NA`,
      },
      {
        title: "HNC Products For Blow Molding Machine",
        mainImg: print2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
– PET bottles are manufactured by blow mold machines
– A injection-molded preform (extruded) and blow molded into the corresponding negative form
– The pre-forms are pre-inspected using high-resolution cameras, since flaws in the pre-form cause waste
– The face seals, side walls and base are checked
 
Technology Requirement
– 2~4 servo axis per machine or 1 big motor drive with gearbox
– Synchronous operation and position control for the mold
– Power: 12000~40000 bottles/ hr
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration/ emergency stop
– Angular synchronous operation with external encoder
– Servo stretching technology in high end machine(every mold has one servo motor)
 
          `,
        features: `NA`,
      },
      {
        title: "HNC VFDs and Servo Used in Filling Machine",
        mainImg: print3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
– The filling machine sets the timing for the entire plant
– It determines the velocity setpoint for all upstream and downstream machines
– The further apart the machines are from the filling machine, the faster they must run in order to maintain the buffer at its optimum level (increase/decrease buffer quantity)
 
Technology Requirement
– 2~4 servo axis per machine or 1 big motor drive with gearbox
– Synchronous operation and position control for filling
– Power: 12000~40000 bottles/ hr
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration/ emergency stop
– Angular synchronous operation with external encoder
– Servo filling technology in high end machine(every filler has one servo motor)
 
          `,
        features: `NA`,
      },
      {
        title: "HNC VFDs and Servo Used in Filling Machine",
        mainImg: print4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
– The filling machine sets the timing for the entire plant
– It determines the velocity setpoint for all upstream and downstream machines
– The further apart the machines are from the filling machine, the faster they must run in order to maintain the buffer at its optimum level (increase/decrease buffer quantity)
 
Technology Requirement
– 2~4 servo axis per machine or 1 big motor drive with gearbox
– Synchronous operation and position control for filling
– Power: 12000~40000 bottles/ hr
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration/ emergency stop
– Angular synchronous operation with external encoder
– Servo filling technology in high end machine(every filler has one servo motor)
 
          `,
        features: `NA`,
      },
      {
        title: "HNC Solution for Horizontal Tubular bag Machine",
        mainImg: print5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
– The product is accurately transferred to the tubular bag via feed conveyors and finger chain (or pocket chain)
– The horizontal transport ensures that the processing does not damage the product

– The bags are closed by longitudinal- and cross-sealing stations

Technology Requirement
– A distinction is made between rotating cross sealer and cylindrical cross sealer.
– Rotating cross sealers are used for faster machines, but can only seal flat products.
– Cylindrical cross sealer can seal high products but have a limited number of items per minute
–±1% tension control tolerance
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop tension control integrated in the drive
– Dynamic response to make sure the tension changed
– Winder and unwinder function implemented by drive
– Rotary knife technology implemented by servo motor
          `,
        features: `NA`,
      },
      {
        title: "HNC Products for Labeling Machine",
        mainImg: print6,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
–  Labeling machines are manufactured in a wide variety of designs.
–  Labels are attached to any type of container (PET and glass bottles, cans, canisters or moldedcontainer to name but a few)
–   In bottle filling lines, the labeling machines operate in a circular manner (rotating labelers)
 
Technology Requirement
– 1 motor drive with gearbox（rotating table）
– Synchronous operation and position control
– Precise tension control
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration/ emergency stop
– Angular synchronous operation with external encoder
– Winder/Unwinder application with tension control
          `,
        features: `NA`,
      },
      {
        title: "HNC Servo and VFDs Used in Palletizer/Depalletizer",
        mainImg: print7,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
– Exact positioning for convex conical risers with stacking corners
– Gripper system for complete riser equipment with integrated layer centering
– Column palletizing with intermediate layers to secure the pallets
– Modular structure allows adaptation to a variety of spatial requirements
 
Technology Requirement
– 2~4 servo axis per machine
– 1~2m/s moving speed
– Power: 240 layers / hr
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration
– Different power range requirement for X/Y/Z axis
– Synchronous operation for X axis if double drive structure
          `,
        features: `NA`,
      },
      {
        title: "HNC VFDs and Servo For Commercial Web Offset",
        mainImg: print8,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description

– 4 until 10 print units per machine

– No format change possible
– Basic machine extendable by different add-on aggregates
– Printing speed up to 15 m/sec


Technology Requirement

– 4~10 servo motors application
– Synchronous operation and position control
– Precise tension control
– Winder/Unwinder
 
System Diagram

– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7

 
Customer Benefit

– Closed-loop servo control integrated in the drive

– Dynamic response for acceleration/ emergency stop

– Angular synchronous operation with external encoder
– Winder/Unwinder application with tension control
          `,
        features: `NA`,
      },
      {
        title: "HNC VFDs and Servo Used in Flexographic machine",
        mainImg: print9,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description

– lexographic printing is a letter press printing process

– The printing plate is made out of a soft material. The low viscous ink is transferred by the Anilox roller to the plate and from there directly with low impression to the printing substrate
– One after the other the four elemental colors (cyan, magenta, blue black) and special or ornamental colors (like white, silver, gold, green) are printed
– The amount of ink transferred to the printing plate is controlled by the make up of the Anilox roller
– The print deck consist of ink supply, Anilox roller, plate cylinder and impression cylinder
 
Technology Requirement
– 3~7 motors for 1 color
– Synchronous operation and position control
– Precise tension control
– Winder/Unwinder
 
System Diagram
– HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
– Closed-loop servo control integrated in the drive
– Dynamic response for acceleration/ emergency stop
– Angular synchronous operation with external encoder
– Winder/Unwinder application with tension control
 
          `,
        features: `NA`,
      },
      {
        title: "HNC Products For Newspaper Offset Press",
        mainImg: print10,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description

- 4 ~7 axis per print units
- No format change possible
- Basic machine extendable by different add-on aggregates
- Printing speed up to 15 m/sec
 
Technology Requirement
- servo motors application
- Synchronous operation and position control
- Precise tension control
- Winder/Unwinder
 
System Diagram
- HV100 / HV480 / HV610 / HSD2 / SV-E3 / HSD7
 
Customer Benefit
- Closed-loop servo control integrated in the drive
- Dynamic response for acceleration/ emergency stop
- Angular synchronous operation with external encoder
- Winder/Unwinder application with tension control
          `,
        features: `NA`,
      },
      {
        title: "HNC Products for Rotogravure machine",
        mainImg: print11,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
  - 8 to 10 printing units per machine
  - Every production has a different set of printing cylinders
  - The machine can be extended by additional converting elements
  - Machine speed from 300m/min to 700m/min
 
Technology Requirement
  - 1 motor for 1 color
  - Synchronous operation and position control
  - Precise tension control
  - Winder/Unwinder
 
System Diagram
  - HV1000 / HV590 / HSD2
 
Customer Benefit
  - Closed-loop servo control integrated in the drive
  - Dynamic response for acceleration/ emergency stop
  - Angular synchronous operation with external encoder
  - Winder/Unwinder application with tension control
          `,
        features: `NA`,
      },
    ],
  },
  "Maquina de Herramientas CNC": {
    img: tool,
    route: "/section/solutions",
    description:
      "Lighting up your life with HNC automation and drive technology!",
    itemsList: [
      {
        title: "HNC Products For CNC Milling machine",
        mainImg: CNCM1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description

- CNC milling machine is  one of the most important types of CNC machine tool. It could complete various machining, e.g. surface,sphere,drilling and other complex parts.
- CNC system control all the cutting action and auxiliary actions, servo system carry out the feed motion 
Always 3-axis (X & Y & Z) interpolation. Servo system ensure the machining rigidity and high response feature


Technology Requirement

- High response feature to ensure good machining rigidity
- High positioning accuracy and repeatability 
- Middle rotor inertia of the servo motor
- EtherCAT control and feedback to finish the closed-loop


System Diagram

- HV610Z + HSD7 + SF
- HV610Z for spindle servo drive, involve rigid tapping function
- HSD7+SF servo system package for feed axes(X / Y / Z)


Customer Benefit

- Closed-loop servo control ensure high positioning precision
- High Dynamic response feature and high rigid satisfy machining accuracy
- High performance vector control of HV610Z suitable for low speed and high torque requirement CNC milling, 
- Low follow-up error of HV610Z for rigid tapping
          `,
        features: `NA`,
      },
      {
        title: "HNC Products For CNC lathe",
        mainImg: CNCM2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- CNC lathe is the most important type of CNC machine tool
- The user programm according to the part,  CNC lathe could complete the machining automatically and precisly, CNC system control all the cutting action and auxiliary actions, servo system carry out the feed motion
- There are always 2-axis (X & Z) interpolation. Servo system ensure the machining rigidity and high response feature
 
Technology Requirement
- High response feature to ensure good machining rigidity
- High positioning accuracy and repeatability
- Middle rotor inertia of the servo motor
- EtherCAT control and feedback to finish the closed-loop
 
System Diagram
- HV610 + HSD7 + SF
- HV610 for spindle drive of CNC lathe
- HSD7+SF servo system package for feed axes(X / Z)
 
Customer Benefit
- Closed-loop servo control ensure high positioning precision
- High Dynamic response feature and high rigid satisfy machining accuracy
- High performance vector control of HV610 suitable for low speed and high torque requirement of CNC spindle
          `,
        features: `NA`,
      },
    ],
  },
  Textiles: {
    img: textile,
    route: "/section/solutions",
    description: "The cradle of beauty.",
    itemsList: [
      {
        title: "HNC VFDs For Combing Machine",
        mainImg: Textil1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- Enhanced quality of the yarn
- Increase of the fiber length by combing out short fibers
 
Technology Requirement
- 500 nips/min
- 1.5 tones of combed sliver per day
- Output（kg/hour）：80
 
System Diagram
- HV100 / HV480/HV610
 
Customer Benefit 
- Vector control or variable frequency control
- Torque adaptation when load changed
- Dynamics response when tension changed
          `,
        features: `NA`,
      },
      {
        title: "HV590 Used In Carding Machine",
        mainImg: Textil2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- The carding machine draws and straightens out the sliver while removing soiled spots at the same time.
- Carding is achieved using flat surfaces lined with sawtooth coil that move in different directions on the working surfaces.
 
Technology Requirement
- Sliver delivery speed （400m/min）
- Feed weight（g/m）：450～1500
- Output（kg/hour）：150
 
System Diagram
- HV480 / HV610
 
Customer Benefit
- Vector control or variable frequency control
- Torque adaptation when load changed
- Dynamics response when tension changed
 
          `,
        features: `NA`,
      },
      {
        title: "HNC Frequency Inverters For Bale Plucker",
        mainImg: Textil3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
- pluck cotton from Bales placed by its side and take it in to the machine for opening and cleaning

- The amount of cotton that it should pluck is adjusted and the traverse length is also set for the number of cotton bales that are kept by its side
- As cotton is a fiber which has different set of fiber parameters from bale to bale and from place to place where it is grown we need to have a homogeneous mixture of cotton which will carry the desired quality in the fibers
- Bale plucker plucks cotton from several bales and makes a homogeneous mixture fed in to the machine
 
Technology Requirement
- 1200kg/hour
- Bales are laid down over a length of 7.2 to 47.2 m
- Fast stop possible
 
System Diagram
- HSD2000 / HV100 / HV480 / HV610
 
Customer Benefit
- 3 axis application based on different power range
- Reliable running under dust and moist environment
- Closed-loop servo control or open-loop speed control
          `,
        features: `NA`,
      },
      {
        title: "HNC Frequency Inverter for Draw Frame",
        mainImg: Textil4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- The drawing frame draws out the sliver and straightens it
- Drawing frame has influence on quality, especially on evenness is very big
- If drawing frame is not set properly, it will also result in drop in yarn strength and yarn elongation at break
- The faults in the sliver that come out of drawing frame can not be corrected . It will pass into the yarn.
 
Technology Requirement
- Delivery speed up to 1100 m/min
- 3-over-3 drafting system 
- Produces up to 20 tons of sliver per day
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Vector control or variable frequency control by drive
- Torque adaptation when load changed
- Dynamics response when tension changed
- Web break detection
          `,
        features: `NA`,
      },
      {
        title: "HNC high performance VFDs Used in Roving",
        mainImg: Textil5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description

- High yarn quality presupposes good preparation
- Roving produces a pre-type yarn suitable for ring-spinning machines
- Drawing of the sliver is continued at this stage
 
Technology Requirement
- Mechanical flyer speed 1400 rpm
- Total rated power 20~25kw
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Vector control or variable frequency control by drive
- Torque adaptation when load changed
- Dynamics response when tension changed
- Web break detection
          `,
        features: `NA`,
      },
      {
        title: "HNC Servo system and Inverter for Screen Printing",
        mainImg: Textil6,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- A high-precision conveyor system ensures that the fabric is fed into the printing head zone accurately and without slipping or wrinkling
- XY table with printing head print the picture on the web
 
Technology Requirement
- 2~3 servo motor to position the printing head
- Web tension control
- Winder and unwinder application
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Vector control for precise speed setpoint
- Torque adaptation when load changed
- Dynamics response when tension changed
- Web break detection
- Servo control for the printing
 
          `,
        features: `NA`,
      },
      {
        title: "HNC Products applied in Sizing",
        mainImg: Textil7,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- Warp thread material is fed into the system from one or several warping beams
- The warp is doused with sizing liquor if necessary and impregnated with sizing liquor in a second dipping bath
- The warp is sent through combs to thin it out and prevent sticking
- After sizing, it is dried lying parallel on cylinders and beamed. The material is then ready for the weaving machine
 
Technology Requirement
- Asynchronous motor drive
- Wire or web tension control
- Continual production
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Speed control by drive
- Torque adaptation to moment of inertia
- Winder and unwinder application inside the drive
- Web break detection
 
          `,
        features: `NA`,
      },
      {
        title: "HNC Frequency Inverter Used in Spinning Frame",
        mainImg: Textil8,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- It is part of the textile manufacturing process where three types of fiber are converted into yarn, then fabrics, which undergo finishing processes such as bleaching to become textiles
- Spinning is the twisting together of drawn out strands of fibers to form yarn, though it is colloquially used to describe the process of drawing out, inserting the twist, and winding onto bobbins 



Technology Requirement
- 1000~1800 spindles per machine
- Wire drawing and tension control



System Diagram
- HV100 / HV480 / HV610



Customer Benefit
- Vector control or variable frequency control or position control by drive
- Torque adaptation when load changed
- Dynamics response when tension changed
- Web break detection
          `,
        features: `NA`,
      },
      {
        title: "HNC Frequency Inverter For Stentering Frame",
        mainImg: Textil9,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

-Stretch fabric to its desired width and then dry 
- This is the final finishing process before the fabric is ready for use in the clothing industry  



Technology Requirement
- Speed synchronous operation
- Web tension control
- Winder and unwinder application



System Diagram
- HV100 / HV480 / HV610



Customer Benefit
- Vector control for precise speed control
- Torque adaptation when load changed
- Dynamics response when tension changed
- Web break detection`,
        features: `NA`,
      },
      {
        title: "HNC Products For Warping Knitting",
        mainImg: Textil10,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- A weft layer transports an adjustable number of weft threads synchronously toward the machine and from one side of the machine to the other 
- Two grids take over the threads from the weft layer and deposit them in the grids running in synchronism with the machine 
- The drives must be synchronized to permit an optimized interplay between weft layer, grid and warp at all times, as well as the interplay between drives and machine



Technology Requirement
- servo closed-loop control and synchronous operation
- Web tension control
- Winder and unwinder application



System Diagram
- HV100 / HV480 / HV610 / HSD7



Customer Benefit
- Vector control for precise speed control
- Torque adaptation when load changed
- Dynamics response when tension changed
- Web break detection
- Dynamic servo control 
          `,
        features: `NA`,
      },
      {
        title: "HNC VFD Frequency Inverter Used In Cotton Opener",
        mainImg: Textil11,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- Opener: Release raw cotton and squeezed into smaller pieces of cotton or cotton-beam in order to facilitate the smooth mixing and cleaning effect
- Scutcher: Clear the impurities, defects and staple fibers in the cotton
- Blend: fully mixed different components of raw cotton in order to facilitate a stable yarn quality
- Roll: Made a certain weight, length, thickness and good shape lap



Technology Requirement
- 1400rpm for the main roll
- 200~250kg/hour



System Diagram
- HV480/HV610



Customer Benefit
- Vector control or variable frequency control
- Torque adaptation when load changed
- Overload ability
          `,
        features: `NA`,
      },
      {
        title: "HNC VFD Used in Auto Winding",
        mainImg: Textil12,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Machine Description
- Wind the small fine yarn into big one
- Clean the fault on the yarn 
- Prepare good quality yarn for next process



Technology Requirement
- One motor drive several winding head
- Wire tension control
- Continual production



System Diagram
- HV480 / HV610



Customer Benefit

- Speed control by drive

- Torque adaptation to moment of inertia

- Dynamics response when tension changed

- Web break detection
          `,
        features: `NA`,
      },
    ],
  },
  "Ventiladores y Bombas": {
    img: fan,
    route: "/section/solutions",
    description: "Save the energy save the world!",
    itemsList: [
      {
        title: "HNC VFDs Used In Blower",
        mainImg: Pump1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
    Application Description

- Widely used in ventilation system and industrial field

- Drive and control the air duct

- Load has v∝f2



Technology Requirement
- V/f control with f2characteristic

- Smooth acceleration and deceleration

- Multi-stage speed setting

- Analog speed setting



System Diagram
- HV100 / HV480 / HV610



Customer Benefit
- Open-loop speed control with torque limiting integrated in the drive

-  I/O function implemented by drive 
          `,
        features: `NA`,
      },
      {
        title: "HNC VFDs For Ventilation System",
        mainImg: Pump2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description
- Widely used in building ventilation system
- Drive and control the air duct
- Load has v ∝ f2
 
Technology Requirement
- V/f control with f2 characteristic
- Smooth acceleration and deceleration
- Multi-stage speed setting
- Analog speed setting
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Open-loop speed control with torque limiting integrated in the drive
- I/O  function implemented by drive
 
          `,
        features: `NA`,
      },
      {
        title: "HNC VFD Used in Water Supply Solution",
        mainImg: Pump3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `
Application Description

- Widely used in building construction, infrastructure water supply system

- Drive and control pump to distribute the water

- Constant pressure control

 

Technology Requirement

- PID control requirement

- V/f control

- Run with pressure sensor

- Analog speed setting

 
System Diagram
- HV480 / HV610

 
Customer Benefit
- Closed-loop PID control with speed setpoint adaptation in the drive
- Dynamic response to make sure the constant pressure control
- I/O function implemented by drive in order to control other non-inverter drive pump
 
 
          `,
        features: `NA`,
      },
      {
        title: "HNC VFD For Compressor",
        mainImg: Pump4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Widely used in factory where need compressed air supply
- Drive and control the compressor
- Heavy load
- Save energy when air requirement reduced and pressure stable
 
Technology Requirement
- Smooth load and moment of inertia adaptation
- PID close-loop control to steady the pressure
- Multi-stage speed setting
- Analog input to acquire the pressure sensor
 
System Diagram
- HV480 / HV610
 
Customer Benefit
- Close-loop speed control with PID integrated in the drive
- I/O  function implemented by drive
 `,
        features: `NA`,
      },
    ],
  },
  Conversiones: {
    img: slicing,
    route: "/section/solutions",
    description: "Save the energy save the world!",
    itemsList: [
      {
        title: "HNC Products For Wire Drawing Machine",
        mainImg: Conv1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Wire drawing machine use traversing and winder technology
- Winder and Unwinder will be used together
- Servo motor drives the traverse part
- The winding step can be set by program
- Torque and tension control is needed
- Dancers for tension control are optional(closed loop tension control)
 
Technology Requirement
- 100~400m/min line speed
- ±1% tension control tolerance
- Fast stop possible
- Web break detection
- Precise diameter calculation
- Precise winding step and calculation
 
System Diagram
- HV100 + SV-E3
 
Customer Benefit
- Closed-loop tension control integrated in the drive
- Dynamic response to tension changed
- Precise position by servo drive
 `,
        features: `NA`,
      },
      {
        title: "HNC VFD For Winder and Unwinder",
        mainImg: Conv2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Center Winder/Unwinder is widely used in converting industry such as paper, foil, film and corrugated board etc.
- Winds material around a core or mandrel
- The coil is driven by a motor
- The motor can be operated in torque or speed controlled mode
- Speed and torque are diameter dependent
- Dancers or load cells for tension control are optional(closed loop tension control)
 
Technology Requirement
- 300~2000m/min line speed
- ±1% tension control tolerance
- Fast stop possible
- Web break detection
- Precise diameter calculation
- Torque pre-control and moment of inertia adaption
 
System Diagram
- HV100-RL
 
Customer Benefit
- Closed-loop tension control integrated in the drive
- Dynamic response to make sure the tension changed
- Winder and unwinder function implemented by drive
`,
        features: `NA`,
      },
      {
        title: "HNC VFD & Servo For Tension Control",
        mainImg: Conv3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Tension control is an important process in converting industry
- Pull and Held is the main control method
- In order to make sure the tension stable the machine needs closed-loop control
 
Technology Requirement
- Up to 2000m/min line speed
- Indirect tension control with torque limiting
- Indirect tension control with speed setpoint correction
- Tension control with torque limiting
- Tension Control with speed setpoint-correction
- Dancer position control with speed setpoint-correction
- Dancer position control with torque limiting
 
System Diagram
- HV100 + SV-E3
 
Customer Benefit
- Closed-loop tension control integrated in the drive
- Dynamic response to material speed changed
- Precise tension control to ensure the web running stable
- Easy implementation with several set-up parameter`,
        features: `NA`,
      },
      {
        title: "HNC Servo Used in Slitting Machine",
        mainImg: Conv4,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Slitting machine is used for slitting the wide paper or film into several small size
- Slitting machine has several cutting knife installed along the web
- Use servo motor to position the cutting knife when dimension changed
- The web will be cut into several small size when it passed the knife array
 
Technology Requirement
- 200~300m/min line speed
- Knife setup precision: ±0.5mm
- Knife set-up time: 10-15s
 
System Diagram
- SV-E3 servo drive + servo motor
 
Customer Benefit
- Closed-loop servo control integrated in the drive
- Dynamic response to make sure the set-up time shorter
- Compatible with servo motor
 `,
        features: `NA`,
      },
      {
        title: "HNC VFD Used in Rotary Knife",
        mainImg: Conv5,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Rotary Knife allows to realize cross cutters to be implemented for the widest range of applications, e.g. foil, film, paper, corrugated board etc.
- The principal requirement of the rotary knife is to respect the synchronism during the cut the moving web by the knife or by the tool
- The standard „Rotary Knife“ used to divide into pieces a moving web
- Special tools for Perforation, Welding, Double cut
 
Technology Requirement
- 200~300m/min line speed
- Precise position control with servo technology
- Dynamic response when acceleration changed
- Torque control
 
System Diagram
- HV100
 
Customer Benefit
- Closed-loop servo control integrated in the drive
- Dynamic adaption with the load and moment of inertia when acceleration changed
- Synchronous operation with external encoder
- Print mark correction if print mark is used in the paper or board
 `,
        features: `NA`,
      },
      {
        title: "HNC VFDs Used in Laminator Machine",
        mainImg: Conv6,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Widely used in solar or battery industry
- Combine coating process in the line
- Precise tension control during all process in order to make sure the coating quality
- Winder and unwinder application
- Splice control
 
Technology Requirement
- 300~400m/min line speed
- ±1% tension control tolerance
- Fast stop possible
- Web break detection
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Closed-loop tension control integrated in the drive
- Dynamic response to make sure the tension changed
- Winder and unwinder function implemented by drive`,
        features: `NA`,
      },
      {
        title: "HNC Products Applied in Flying Saw",
        mainImg: Conv7,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Widely used in factory where need compressed air supply
- Drive and control the compressor
- Heavy load
- Save energy when air requirement reduced and pressure stable
 
Technology Requirement
- Smooth load and moment of inertia adaptation
- PID close-loop control to steady the pressure
- Multi-stage speed setting
- Analog input to acquire the pressure sensor
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Close-loop speed control with PID integrated in the drive
- I/O  function implemented by drive
`,
        features: `NA`,
      },
      {
        title: "HNC VFD Used in Corrugated Board Line",
        mainImg: Conv8,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Corrugated board is widely used in packaging and logistic industry

- Corrugated board production line produces the corrugated board continually
- Most of the process use roll to transfer the material
- Continual production with low down time
 

Technology Requirement
- 250~300m/min line speed
- Precise tension control
- Web break detection and alarm
- Online splice control
- Rotary knife to cut the board
- Stacker application after the cutting process



System Diagram
- HV100
- HV480 / HV610



Customer Benefit
- Closed-loop tension control integrated in the drive
- Dynamic adaption with the load and moment of inertia
- Winder/Unwinder function implemented by the drive, PLC only triggers the start signal
- Reliable running and operation reduce the downtime and save the operation cost`,
        features: `NA`,
      },
      {
        title: "HNC VFD Employed in Die Cutting Machine",
        mainImg: Conv9,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Die cutting machine is used to die cut the corrugated board into different shape
- Die cutting machine used the same technology like rotary knife
- Use servo motor to position the die cutting knife when dimension changed
 
Technology Requirement
- Design speed: 100~120sheets/min
- Max. sheet caliper: 7mm
 
System Diagram
- HV100 + servo motor
 
Customer Benefit
- Closed-loop servo control integrated in the drive
- Synchronous with external encoder
- Dynamics response when load and moment of inertia changed or acceleration
`,
        features: `NA`,
      },
      {
        title: "HNC Frequency Inverter Applied For Coating Machine",
        mainImg: Conv10,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Widely used in solar or battery industry
- Coating process with converting technology
- Precise tension control during all process in order to make sure the coating quality
- Winder and unwinder application
- Splice control
 
Technology Requirement
- 300~400m/min line speed
- ±1% tension control tolerance
- Fast stop possible
 
System Diagram
- HV100 / HV480 / HV610
 
Customer Benefit
- Closed-loop tension control integrated in the drive
- Dynamic response to make sure the tension changed
- Winder and unwinder function implemented by drive
`,
        features: `NA`,
      },
    ],
  },
  Elevador: {
    img: stairs,
    route: "/section/solutions",
    description: "Lifting day by day!",
    itemsList: [
      {
        title: "HNC Servo and VFD Products in Commercial Elevator",
        mainImg: Elev1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Widely used in building and shopping mall
- Drive and control asynchronous motor/ synchronous motor
- Wind the wire in order to lift the elevator
 
Technology Requirement
- PG card needed(encoder feedback)
- Smooth acceleration and deceleration
- Fast stop possible
- Multi-stage speed setting
- Analog speed setting
 
System Diagram
- HV610 / HV590L
 
Customer Benefit
- Closed-loop speed control with torque limiting integrated in the drive
- Dynamic response to make sure the acceleration smooth
- I/O  function implemented by drive`,
        features: `NA`,
      },
      {
        title: "HNC VFDs Used in Industrial Elevator",
        mainImg: Elev2,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Widely used in building construction, infrastructure
- Drive and control asynchronous motor/ synchronous motor
- Driving motor with gearbox and rack to climb up and down
 
Technology Requirement
- PG card needed(encoder feedback)
- Smooth acceleration and deceleration
- Fast stop possible
- Multi-stage speed setting
- Analog speed setting
 
System Diagram
- HV610C
 
Customer Benefit
- Closed-loop speed control with torque limiting integrated in the drive
- Dynamic response to make sure the acceleration smooth
- I/O  function implemented by drive
 `,
        features: `NA`,
      },
      {
        title: "HNC Products Used in Commercial Escalator",
        mainImg: Elev3,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description
- Widely used in shopping mall, building
- Heavy load tolerant
- Load changing adaptation
- Drive the towline or track
 
Technology Requirement
- Load and torque adaptation
- Stop function save the energy
- Fast stop possible
 
System Diagram
- HV590L
 
Customer Benefit
- Closed-loop speed control integrated in the drive
- Dynamic response to make sure the load changed
- I/O function implemented by drive`,
        features: `NA`,
      },
    ],
  },
  Grua: {
    img: crane,
    route: "/section/solutions",
    description: "Pick up everything you can!",
    itemsList: [
      {
        title: "HNC VFDs in crane appplication",
        mainImg: Crane1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Widely used in building and manufacturing Plant

- Drive and control asynchronous motor

- Wind the wire in order to lift the load

 

Technology Requirement

- PG card needed(encoder feedback)

-Professional brake/release control logic

-Anti-sway function during translation movement

- Smooth acceleration and deceleration

- Fast stop possible

- Multi-stage speed setting

- Analog speed setting

 

System Diagram

- HV610C / HV100

 

Customer Benefit

- Closed-loop speed control with torque limiting integrated in the drive

- Professional brake control makes equipment safer

- Anti-sway function makes movement more stable

- Dynamic response to make sure the acceleration smooth

- I/O  function implemented by drive`,
        features: `NA`,
      },
    ],
  },
  "Industria de Plásticos": {
    img: plastic,
    route: "/section/solutions",
    description: "Synthesize everything you want",
    itemsList: [
      {
        title: "HNC VFD in plastic industry",
        mainImg: Plastic1,
        dimensionsImg: "",
        parametersImg: "",
        overview: `Application Description

- Widely used in plastic molding, pipe extrusion, shoe making, rubber, metal die casting

- Drive and control synchronous motor

- Injection molding used in plastic products

 

Technology Requirement

- Injection molding speed precision control

- Injection molding pressure precision control

- Matching with injection molding machine controller

- Servo oil pump control for stability and precision

- Closed-loop vector control mode with PG card

- Accurate feedback of oil pressure and flow

- Efficient energy saving effect

 

System Diagram

- HV610I

 

Customer Benefit

- Closed-loop vector guarantees drive performance and operating efficiency

- Servo oil pump control, significant energy saving effect

- Injection molding speed/pressure precision control ensures product quality

- Perfectly matched with the injection molding machine controller, easy to debug

- Powerful PID ensures fast and accurate response`,
        features: `NA`,
      },
    ],
  },
};

export const ProdsAndSols = { ...Products, ...Solutions };

export const Footers: footersIndexed = {
  "Acerca de Boson": {
    list: [
      { name: "Descripción de la Empresa", route: "" },
      { name: "Visión y Misión", route: "" },
      { name: "Historia de Crecimiento", route: "" },
    ],
  },
  Productos: {
    list: [
      { name: "Controlador CNC", route: "" },
      { name: "Servo Drive", route: "" },
      { name: "Invertidor de Frecuencia", route: "" },
      { name: "Motor Spindle", route: "" },
      { name: "Motor AC Servo", route: "" },
      { name: "Accesorios", route: "" },
      { name: "Sensor", route: "" },
    ],
  },
  Soluciones: {
    list: [
      { name: "Empaques e Impresiones", route: "" },
      { name: "Maquina de Herramientas CNC", route: "" },
      { name: "Textiles", route: "" },
      { name: "Ventiladores y Bombas", route: "" },
      { name: "Conversiones", route: "" },
      { name: "Elevador", route: "" },
      { name: "Grúa", route: "" },
      { name: "Industria de Plásticos", route: "" },
    ],
  },
  Servicios: {
    list: [
      { name: "Descargar", route: "" },
      { name: "FaQ", route: "" },
      { name: "Garantías", route: "" },
    ],
  },
};

export const Navs: NavsIndexed = {
  Inicio: { route: "/" },
  Productos: { route: "/section/products" },
  Soluciones: { route: "/section/solutions" },
  // Servicios: { route: "" },
  "Acerca de Boson": { route: "/about" },
};
