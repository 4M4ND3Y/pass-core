# PassCore 🔐

A modern, lightweight password generator built with React and Radix UI. Generate secure passwords with customizable length and configurable character sets including numbers and special characters.

![PassCore Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🎛️ **Adjustable Password Length**: Generate passwords from 1 to 50 characters
- 🔢 **Customizable Character Sets**: Toggle numbers and special characters on/off
- 💪 **Real-time Strength Assessment**: Visual password strength indicator with color-coded badges
- 📋 **One-Click Copy**: Instant clipboard copy functionality
- 🔄 **Quick Regeneration**: Refresh button for instant new password generation
- 🎨 **Modern UI**: Clean, responsive interface built with Radix UI components
- ⚡ **Instant Updates**: Real-time password generation as you adjust settings
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🚀 Demo

![PassCore Interface](/public/demo-screenshot.png)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.8
- **UI Components**: Radix UI Themes
- **Styling**: Tailwind CSS 3.4.13
- **Icons**: Radix UI React Icons
- **Language**: JavaScript (ES6+)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/4M4ND3Y/pass-core.git

# Navigate to project directory
cd pass-core

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🔧 Usage

1. **Set Password Length**: Use the slider to adjust password length (1-50 characters)
2. **Configure Character Sets**: Toggle switches to include/exclude numbers and special characters
3. **Generate Password**: Password generates automatically as you adjust settings
4. **Copy Password**: Click the "Copy" button to copy password to clipboard
5. **Regenerate**: Click the refresh icon to generate a new password with current settings
6. **Check Strength**: View the color-coded strength indicator below the controls

### Password Strength Levels

| Length | Strength    | Color         |
| ------ | ----------- | ------------- |
| < 4    | Very Weak   | Red           |
| 4-6    | Weak        | Orange        |
| 7-8    | Good        | Yellow        |
| 9-10   | Strong      | Green (Grass) |
| 11+    | Very Strong | Green         |

## 📁 Project Structure

```
pass-core/
├── public/
│   ├── vite.svg
│   └── amandey.jpg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎯 Core Components

### Password Generator Logic

- **Character Sets**: Combines uppercase, lowercase, numbers, and special characters
- **Randomization**: Uses `Math.random()` for secure character selection
- **Real-time Updates**: Automatic regeneration on setting changes

### UI Components

- **TextField**: Displays generated password with copy functionality
- **Slider**: Controls password length with visual feedback
- **Switch**: Toggles for numbers and special characters
- **Badge**: Color-coded password strength indicator
- **HoverCard**: Interactive information display

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ES6+ JavaScript standards
- Use functional components with hooks
- Maintain consistent formatting with Prettier
- Follow component-based architecture

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aman Dey**

- GitHub: [@4M4ND3Y](https://github.com/4M4ND3Y)
- LinkedIn: [Connect with me](https://linkedin.com/in/amandey)

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for the excellent component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 🔮 Future Enhancements

- [ ] Password history feature
- [ ] Custom character set input
- [ ] Export passwords to file
- [ ] Password entropy calculation
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts
- [ ] Password templates/presets

---

<div align="center">

**Made with ❤️ by [Aman Dey](https://github.com/4M4ND3Y)**

</div>
