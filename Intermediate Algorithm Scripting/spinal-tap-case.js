function spinalCase(str) {
  // Replace any underscores or spaces with dashes
  str = str.replace(/_/g, '-').replace(/\s+/g, '-');

  // Insert a dash between a lowercase and uppercase letter
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

  // Convert the string to lowercase
  str = str.toLowerCase();

  return str;
}

spinalCase('This Is Spinal Tap');