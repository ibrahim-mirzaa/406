import 'package:flutter/material.dart';

void main()=> runApp(
  MaterialApp(
  debugShowCheckedModeBanner: false,
  home: Scaffold(
    appBar: AppBar(
      title: Text("Login Page"),
    ),
    body: Column(
      children: [
        TextFormField(decoration: InputDecoration(
          label: Text("Enter Your Name:"),
        ),),
        TextFormField(decoration: InputDecoration(
          label: Text("Enter Your Email id :"),
        ),),
        ElevatedButton(
          onPressed: ()=>{}, child: Text("SUBMIT"),
        )
      ],
    )
  ),
  )
);
