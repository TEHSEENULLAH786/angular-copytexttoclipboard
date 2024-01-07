import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-copied',
  templateUrl: './copied.component.html',
  styleUrls: ['./copied.component.css'],
})
export class CopiedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  copyToClipboard(text) {
    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);
  }
}
