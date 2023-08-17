import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const CustomHomeIcon = () => {
  return (
    <View style={styles.container}>
      {/* <Svg width={40} height={40}>
        <Path
          d="M18.4962 8.82049L6.33383 20.3461V32.7856C6.33383 33.1077 6.44503 33.4166 6.64297 33.6443C6.84091 33.8721 7.10938 34 7.38931 34L14.7816 33.978C15.0606 33.9764 15.3277 33.8477 15.5245 33.6202C15.7213 33.3926 15.8318 33.0846 15.8318 32.7636V25.4991C15.8318 25.177 15.943 24.8681 16.1409 24.6403C16.3389 24.4126 16.6073 24.2846 16.8873 24.2846H21.1092C21.3891 24.2846 21.6575 24.4126 21.8555 24.6403C22.0534 24.8681 22.1646 25.177 22.1646 25.4991V32.7583C22.1642 32.9181 22.1912 33.0764 22.244 33.2242C22.2969 33.3719 22.3745 33.5063 22.4726 33.6194C22.5707 33.7326 22.6872 33.8224 22.8154 33.8837C22.9437 33.9449 23.0812 33.9765 23.2201 33.9765L30.6097 34C30.8897 34 31.1581 33.8721 31.3561 33.6443C31.554 33.4166 31.6652 33.1077 31.6652 32.7856V20.3378L19.5055 8.82049C19.3625 8.68791 19.1845 8.61561 19.0008 8.61561C18.8172 8.61561 18.6391 8.68791 18.4962 8.82049ZM37.7078 16.6543L32.193 11.4239V0.910816C32.193 0.669253 32.1095 0.437583 31.9611 0.266772C31.8126 0.0959609 31.6113 0 31.4013 0H27.7072C27.4972 0 27.2959 0.0959609 27.1474 0.266772C26.999 0.437583 26.9156 0.669253 26.9156 0.910816V6.42201L21.0095 0.83112C20.4428 0.294481 19.7316 0.00107275 18.9975 0.00107275C18.2635 0.00107275 17.5523 0.294481 16.9855 0.83112L0.287286 16.6543C0.207128 16.7305 0.140809 16.8242 0.0921204 16.9299C0.0434314 17.0356 0.0133259 17.1514 0.00352407 17.2705C-0.00627773 17.3896 0.00441627 17.5098 0.034995 17.6241C0.0655738 17.7385 0.115438 17.8448 0.181739 17.937L1.8639 20.2899C1.93002 20.3825 2.01135 20.459 2.10323 20.5153C2.19511 20.5716 2.29574 20.6065 2.39935 20.618C2.50296 20.6295 2.60753 20.6174 2.70707 20.5823C2.8066 20.5472 2.89915 20.4899 2.9794 20.4137L18.4962 5.70854C18.6391 5.57596 18.8172 5.50366 19.0008 5.50366C19.1845 5.50366 19.3625 5.57596 19.5055 5.70854L35.0229 20.4137C35.1031 20.4899 35.1955 20.5473 35.2949 20.5825C35.3943 20.6177 35.4987 20.63 35.6022 20.6187C35.7058 20.6074 35.8064 20.5728 35.8982 20.5168C35.9901 20.4608 36.0715 20.3845 36.1378 20.2922L37.82 17.9393C37.8862 17.8466 37.9358 17.7397 37.966 17.6248C37.9963 17.51 38.0065 17.3894 37.996 17.27C37.9856 17.1505 37.9548 17.0347 37.9053 16.929C37.8559 16.8234 37.7887 16.73 37.7078 16.6543Z"
          fill="#6FCF97"
        />
      </Svg> */}

      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none">
        <Path
          d="M9.33435 0.265555C9.51781 0.0944833 9.75465 0 10 0C10.2454 0 10.4822 0.0944833 10.6656 0.265555L19.688 8.68693C19.8766 8.87506 19.9881 9.13281 19.9991 9.40572C20.0101 9.67863 19.9196 9.94534 19.7468 10.1495C19.574 10.3537 19.3323 10.4793 19.0729 10.4998C18.8135 10.5204 18.5567 10.4342 18.3567 10.2596L18.0198 9.94698V17.8947C18.0198 18.453 17.8086 18.9885 17.4326 19.3834C17.0566 19.7782 16.5466 20 16.0149 20H3.98512C3.45338 20 2.94341 19.7782 2.5674 19.3834C2.1914 18.9885 1.98017 18.453 1.98017 17.8947V9.94698L1.64333 10.2596C1.4433 10.4342 1.18645 10.5204 0.927061 10.4998C0.667668 10.4793 0.426039 10.3537 0.253218 10.1495C0.0803968 9.94534 -0.0100825 9.67863 0.000893657 9.40572C0.0118698 9.13281 0.123442 8.87506 0.31204 8.68693L9.33435 0.265555ZM3.98512 8.07322V17.8947H6.99256V12.6313C6.99256 12.3521 7.09818 12.0844 7.28618 11.8869C7.47418 11.6895 7.72917 11.5786 7.99504 11.5786H12.005C12.2708 11.5786 12.5258 11.6895 12.7138 11.8869C12.9018 12.0844 13.0074 12.3521 13.0074 12.6313V17.8947H16.0149V8.07428L10 2.46038L3.98512 8.07322ZM11.0025 17.8947V13.684H8.99752V17.8947H11.0025Z"
          fill="#6FCF97"
        />
      </Svg>
    </View>
  )
}

export default CustomHomeIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})