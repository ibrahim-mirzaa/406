import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        home: const First(),
        routes: {
          '/second': (context) => const Second(),
        },
      ),
    );

class First extends StatelessWidget {
  const First({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('First Navigation Bar'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () => {Navigator.pushNamed(context, '/second')},
          child: const Text('Go to 2nd Page'),
        ),
      ),
    );
  }
}

class Second extends StatelessWidget {
  const Second({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Second Navigation Bar'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () => {Navigator.pop(context, '/second')},
          child: const Text('Go to 1st Page'),
        ),
      ),
    );
  }
}
