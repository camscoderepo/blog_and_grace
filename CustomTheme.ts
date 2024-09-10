
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const CustomTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "var(--color-primary-50)",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #FFD700 
		"--color-primary-50": "255 249 217", // #fff9d9
		"--color-primary-100": "255 247 204", // #fff7cc
		"--color-primary-200": "255 245 191", // #fff5bf
		"--color-primary-300": "255 239 153", // #ffef99
		"--color-primary-400": "255 227 77", // #ffe34d
		"--color-primary-500": "255 215 0", // #FFD700
		"--color-primary-600": "230 194 0", // #e6c200
		"--color-primary-700": "191 161 0", // #bfa100
		"--color-primary-800": "153 129 0", // #998100
		"--color-primary-900": "125 105 0", // #7d6900
		// secondary | #ADD8E6 
		"--color-secondary-50": "243 249 251", // #f3f9fb
		"--color-secondary-100": "239 247 250", // #eff7fa
		"--color-secondary-200": "235 245 249", // #ebf5f9
		"--color-secondary-300": "222 239 245", // #deeff5
		"--color-secondary-400": "198 228 238", // #c6e4ee
		"--color-secondary-500": "173 216 230", // #ADD8E6
		"--color-secondary-600": "156 194 207", // #9cc2cf
		"--color-secondary-700": "130 162 173", // #82a2ad
		"--color-secondary-800": "104 130 138", // #68828a
		"--color-secondary-900": "85 106 113", // #556a71
		// tertiary | #FFFFFF 
		"--color-tertiary-50": "255 255 255", // #ffffff
		"--color-tertiary-100": "255 255 255", // #ffffff
		"--color-tertiary-200": "255 255 255", // #ffffff
		"--color-tertiary-300": "255 255 255", // #ffffff
		"--color-tertiary-400": "255 255 255", // #ffffff
		"--color-tertiary-500": "255 255 255", // #FFFFFF
		"--color-tertiary-600": "230 230 230", // #e6e6e6
		"--color-tertiary-700": "191 191 191", // #bfbfbf
		"--color-tertiary-800": "153 153 153", // #999999
		"--color-tertiary-900": "125 125 125", // #7d7d7d
		// success | #32CD32 
		"--color-success-50": "224 248 224", // #e0f8e0
		"--color-success-100": "214 245 214", // #d6f5d6
		"--color-success-200": "204 243 204", // #ccf3cc
		"--color-success-300": "173 235 173", // #adebad
		"--color-success-400": "112 220 112", // #70dc70
		"--color-success-500": "50 205 50", // #32CD32
		"--color-success-600": "45 185 45", // #2db92d
		"--color-success-700": "38 154 38", // #269a26
		"--color-success-800": "30 123 30", // #1e7b1e
		"--color-success-900": "25 100 25", // #196419
		// warning | #FFDD57 
		"--color-warning-50": "255 250 230", // #fffae6
		"--color-warning-100": "255 248 221", // #fff8dd
		"--color-warning-200": "255 247 213", // #fff7d5
		"--color-warning-300": "255 241 188", // #fff1bc
		"--color-warning-400": "255 231 137", // #ffe789
		"--color-warning-500": "255 221 87", // #FFDD57
		"--color-warning-600": "230 199 78", // #e6c74e
		"--color-warning-700": "191 166 65", // #bfa641
		"--color-warning-800": "153 133 52", // #998534
		"--color-warning-900": "125 108 43", // #7d6c2b
		// error | #D32F2F 
		"--color-error-50": "248 224 224", // #f8e0e0
		"--color-error-100": "246 213 213", // #f6d5d5
		"--color-error-200": "244 203 203", // #f4cbcb
		"--color-error-300": "237 172 172", // #edacac
		"--color-error-400": "224 109 109", // #e06d6d
		"--color-error-500": "211 47 47", // #D32F2F
		"--color-error-600": "190 42 42", // #be2a2a
		"--color-error-700": "158 35 35", // #9e2323
		"--color-error-800": "127 28 28", // #7f1c1c
		"--color-error-900": "103 23 23", // #671717
		// surface | #F5F5F5 
		"--color-surface-50": "254 254 254", // #fefefe
		"--color-surface-100": "253 253 253", // #fdfdfd
		"--color-surface-200": "253 253 253", // #fdfdfd
		"--color-surface-300": "251 251 251", // #fbfbfb
		"--color-surface-400": "248 248 248", // #f8f8f8
		"--color-surface-500": "245 245 245", // #F5F5F5
		"--color-surface-600": "221 221 221", // #dddddd
		"--color-surface-700": "184 184 184", // #b8b8b8
		"--color-surface-800": "147 147 147", // #939393
		"--color-surface-900": "120 120 120", // #787878
		
	}
}