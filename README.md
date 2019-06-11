### Dice embedded developer test challenge.
For this challenge applicants must create a program that takes the parameters of a url, a serial port, and a baud rate.

The program must access a rest endpoint with that url and use the JSON that is returned to form a serial command.

### Dice embedded developer test challenge.
For this challenge applicants must create a program that takes the parameters of a url, serial port, and baud rate.
The program must access a rest endpoint with that url and use the JSON that is return to form a serial command.
#### API Return
The program must access an endpoint that returns a packet similar to the following..
The devices array contains the intended state for each device to be in.
```
{
  devices: [
    {
      'type': 'light',
      'state': 'on'
    },
    {
      'type': 'shade’,
      'state': '50'
    },
    {
      'type': 'heat’,
      'state': '80’,
      'unit': 'F'
    }
  ]
}
```
#### Serial out
After retrieving the state of devices from the api, the serial port will send out a number of bytes that correspond to 
the value of it's state. The format for the serial packet is
`J<type> <value><checksum><CR><NL>`.

* `<type>` corresponds to the first letter of the value of the `type` property from the API's response object.
* `<checksum>` is calculated as 256 - sum(value of previous bytes) & 255.
* `<value>` for type light will come across as unsigned integer 1 for on and unsigned 0 for off.
* `<value>` for type other types will come across as unsigned 8 bit integer values.
* `<value>` for type heat must be in celsius when provided to Serial

#### Setup
Your code will be run on a raspberry pi 3 please provided any install scripts and instructions your code may need.
